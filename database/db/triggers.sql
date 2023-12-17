CREATE OR REPLACE FUNCTION create_invoice_after_service_insert()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO invoice (total, service_id) VALUES (0, NEW.service_id);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER create_invoice_trigger
AFTER INSERT ON service
FOR EACH ROW
EXECUTE FUNCTION create_invoice_after_service_insert();

CREATE OR REPLACE FUNCTION update_avg_rating_after_insert()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE worker
    SET avg_rating = (SELECT AVG(rate) FROM rating WHERE worker_phone = NEW.worker_phone)
    WHERE phone = NEW.worker_phone;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_avg_rating_trigger
AFTER INSERT ON rating
FOR EACH ROW
EXECUTE FUNCTION update_avg_rating_after_insert();

CREATE OR REPLACE FUNCTION prevent_availability_update_before_worker_update()
RETURNS TRIGGER AS $$
BEGIN
    IF (NEW.available = TRUE AND EXISTS (SELECT 1 FROM service WHERE worker_phone = OLD.phone AND status ='In progress')) THEN
        RAISE EXCEPTION 'Availability cannot be updated while services are in progress';
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER prevent_availability_update_trigger
BEFORE UPDATE ON worker
FOR EACH ROW
EXECUTE FUNCTION prevent_availability_update_before_update();

CREATE OR REPLACE FUNCTION create_notification_after_service_insert()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO notification (notification_date, notification_time, worker_phone, service_id)
    VALUES (CURRENT_DATE, CURRENT_TIME, NEW.worker_phone, NEW.service_id);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER create_notification_trigger
AFTER INSERT ON service
FOR EACH ROW
EXECUTE FUNCTION create_notification_after_service_insert();
