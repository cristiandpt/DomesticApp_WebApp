CREATE TABLE user_info (
    user_phone VARCHAR(11) PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    birth_date DATE,
    password VARCHAR(255),
    user_type VARCHAR(100)
);

CREATE TABLE client (
    phone VARCHAR(11) PRIMARY KEY,
    services_url VARCHAR(255)
);

CREATE TABLE address (
    address_loc VARCHAR(100),
    user_phone VARCHAR(11) NOT NULL,
  	lat DOUBLE PRECISION,
  	lng DOUBLE PRECISION,
    CONSTRAINT fk_address_user FOREIGN KEY (user_phone) REFERENCES user(phone),
    PRIMARY KEY (address_loc, user_phone)
);

CREATE TABLE worker (
    phone VARCHAR(11) PRIMARY KEY,
    cc_url VARCHAR(255),
    available BOOLEAN,
    pfp_url VARCHAR(255)
);

CREATE TABLE job (
    job_id SERIAL PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TABLE job_type (
    id SERIAL PRIMARY KEY,
    hour_periodicity INT,
    periodicity_description VARCHAR(100)
);

CREATE TABLE worker_job (
    worker_phone VARCHAR(11) NOT NULL,
    job_id SERIAL NOT NULL,
    price DOUBLE PRECISION CONSTRAINT chk_positive_price CHECK (price >= 0),
    job_type_id INT NOT NULL,
    PRIMARY KEY (worker_phone, job_id),
    CONSTRAINT fk_worker_job_worker FOREIGN KEY (worker_phone) REFERENCES worker(phone),
    CONSTRAINT fk_worker_job_job FOREIGN KEY (job_id) REFERENCES job(job_id),
    CONSTRAINT fk_worker_job_job_type FOREIGN KEY (job_type_id) REFERENCES job_type(id)
);

CREATE TABLE service (
    service_id SERIAL PRIMARY KEY,
    description VARCHAR(100),
    status VARCHAR(100),
    client_phone VARCHAR(11) NOT NULL,
    worker_phone VARCHAR(11) NOT NULL,
    job_id INT NOT NULL,
    CONSTRAINT fk_service_client FOREIGN KEY (client_phone) REFERENCES client(phone),
    CONSTRAINT fk_service_worker FOREIGN KEY (worker_phone) REFERENCES worker(phone),
    CONSTRAINT fk_service_job FOREIGN KEY (job_id) REFERENCES job(job_id)
);

CREATE TABLE rating (
    rating_id SERIAL PRIMARY KEY,
    rate DOUBLE PRECISION CONSTRAINT chk_rate_range CHECK (rate >= 0 AND rate <= 5),
    service_id INT NOT NULL,
    worker_phone VARCHAR(11) NOT NULL,
    CONSTRAINT fk_rating_service FOREIGN KEY (service_id) REFERENCES service(service_id),
    CONSTRAINT fk_rating_worker FOREIGN KEY (worker_phone) REFERENCES worker(phone)
);

CREATE TABLE invoice (
    invoice_id SERIAL PRIMARY KEY,
    total DOUBLE PRECISION CONSTRAINT chk_positive_total CHECK (total >= 0),
    service_id INT NOT NULL,
    CONSTRAINT fk_invoice_service FOREIGN KEY (service_id) REFERENCES service(service_id)
);

CREATE TABLE notification (
    notification_id SERIAL PRIMARY KEY,
    notification_date DATE,
    notification_time TIME,
    worker_phone VARCHAR(11) NOT NULL,
    service_id INT NOT NULL,
    CONSTRAINT fk_notification_worker FOREIGN KEY (worker_phone) REFERENCES worker(phone),
    CONSTRAINT fk_notification_service FOREIGN KEY (service_id) REFERENCES service(service_id)
);

CREATE TABLE payment (
    payment_id SERIAL PRIMARY KEY,
    payment_date DATE,
    invoice_id INT NOT NULL,
    client_phone VARCHAR(11) NOT NULL,
    CONSTRAINT fk_payment_invoice FOREIGN KEY (invoice_id) REFERENCES invoice(invoice_id),
    CONSTRAINT fk_payment_client FOREIGN KEY (client_phone) REFERENCES client(phone)
);

CREATE TABLE payment_method (
    id SERIAL PRIMARY KEY,
    cvv INT CHECK (cvv >= 0),
    owner_name VARCHAR(100),
    card_number VARCHAR(100),
    expiration_date DATE,
    client_phone VARCHAR(11) NOT NULL,
    CONSTRAINT fk_payment_method_client FOREIGN KEY (client_phone) REFERENCES client(phone)
);

CREATE TABLE login (
    login_id SERIAL PRIMARY KEY,
    username VARCHAR(100),
    password VARCHAR(100),
    access_token VARCHAR(100),
    refresh_token VARCHAR(100),
    refresh_token_expiration_date DATE,
    access_token_expiration_date DATE,
    user_phone VARCHAR(11) NOT NULL,
    CONSTRAINT fk_login_user_info FOREIGN KEY (user_phone) REFERENCES user_info(user_phone)
);
