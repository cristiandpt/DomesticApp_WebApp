CREATE TABLE User_info (
    user_phone VARCHAR(11) PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    address VARCHAR(100),
    birth_date DATE,
    user_type VARCHAR(100)
);

CREATE TABLE Address (
    address_loc VARCHAR(100),
    user_phone VARCHAR(11) NOT NULL,
    CONSTRAINT fk_address_user_info FOREIGN KEY (user_phone) REFERENCES User_info(user_phone),
    PRIMARY KEY (address_loc, user_phone)
);

CREATE TABLE Worker (
    phone VARCHAR(11) PRIMARY KEY,
    cc_url VARCHAR(255),
    available BOOLEAN,
    pfp_url VARCHAR(255)
);

CREATE TABLE Job (
    jobId SERIAL PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TABLE Job_Type (
    id SERIAL PRIMARY KEY,
    hour_periodicity INT,
    periodicity_description VARCHAR(100)
);

CREATE TABLE Worker_job (
    user_phone VARCHAR(11) NOT NULL,
    jobId SERIAL NOT NULL,
    price DOUBLE PRECISION CONSTRAINT chk_positive_price CHECK (price >= 0),
    laborType VARCHAR(100),
    job_type_id INT,
    PRIMARY KEY (user_phone, jobId),
    CONSTRAINT fk_worker_job_user_info FOREIGN KEY (user_phone) REFERENCES User_info(user_phone),
    CONSTRAINT fk_worker_job_job FOREIGN KEY (jobId) REFERENCES Job(jobId),
    CONSTRAINT fk_worker_job_job_type FOREIGN KEY (job_type_id) REFERENCES Job_Type(id),
    CONSTRAINT chk_positive_rate CHECK (rate >= 0 AND rate <= 5), -- Adding name to the rate constraint
    CONSTRAINT chk_positive_cvv CHECK (cvv >= 0) -- Adding name to the cvv constraint
);

CREATE TABLE Service (
    serviceId SERIAL PRIMARY KEY,
    description VARCHAR(100),
    status VARCHAR(100),
    client_phone VARCHAR(11),
    worker_phone VARCHAR(11),
    jobId INT,
    CONSTRAINT fk_service_client FOREIGN KEY (client_phone) REFERENCES User_info(user_phone),
    CONSTRAINT fk_service_worker FOREIGN KEY (worker_phone) REFERENCES Worker(phone),
    CONSTRAINT fk_service_job FOREIGN KEY (jobId) REFERENCES Job(jobId)
);

CREATE TABLE Rating (
    ratingId SERIAL PRIMARY KEY,
    rate FLOAT CHECK (rate >= 0 AND rate <= 5),
    serviceId INT,
    CONSTRAINT fk_rating_service FOREIGN KEY (serviceId) REFERENCES Service(serviceId)
);

CREATE TABLE Worker_rating (
    id SERIAL PRIMARY KEY,
    user_phone VARCHAR(11) NOT NULL,
    ratingId INT,
    CONSTRAINT fk_worker_rating_user_info FOREIGN KEY (user_phone) REFERENCES User_info(user_phone),
    CONSTRAINT fk_worker_rating_rating FOREIGN KEY (ratingId) REFERENCES Rating(ratingId)
);

CREATE TABLE Invoice (
    invoiceId SERIAL PRIMARY KEY,
    total DOUBLE PRECISION CONSTRAINT chk_positive_total CHECK (total >= 0),
    serviceId INT,
    CONSTRAINT fk_invoice_service FOREIGN KEY (serviceId) REFERENCES Service(serviceId)
);

CREATE TABLE Notification (
    notificationId SERIAL PRIMARY KEY,
    notificationDate DATE,
    notificationTime TIME,
    worker_phone VARCHAR(11),
    serviceId INT,
    CONSTRAINT fk_notification_worker FOREIGN KEY (worker_phone) REFERENCES Worker(phone),
    CONSTRAINT fk_notification_service FOREIGN KEY (serviceId) REFERENCES Service(serviceId)
);

CREATE TABLE Payment (
    paymentId SERIAL PRIMARY KEY,
    paymentDate DATE,
    invoiceId INT,
    client_phone VARCHAR(11),
    CONSTRAINT fk_payment_invoice FOREIGN KEY (invoiceId) REFERENCES Invoice(invoiceId),
    CONSTRAINT fk_payment_client FOREIGN KEY (client_phone) REFERENCES User_info(user_phone)
);

CREATE TABLE Client (
    phone VARCHAR(11) PRIMARY KEY,
    services_url VARCHAR(255)
);

CREATE TABLE Payment_method (
    id SERIAL PRIMARY KEY,
    cvv INT CHECK (cvv >= 0),
    owner_name VARCHAR(100),
    card_number VARCHAR(100),
    expiration_date DATE,
    client_phone VARCHAR(11) NOT NULL,
    CONSTRAINT fk_payment_method_client FOREIGN KEY (client_phone) REFERENCES User_info(user_phone)
);

CREATE TABLE Login (
    loginId SERIAL PRIMARY KEY,
    username VARCHAR(100),
    password VARCHAR(100),
    access_token VARCHAR(100),
    refresh_token VARCHAR(100),
    refresh_token_expiration_date DATE,
    access_token_expiration_date DATE,
    user_phone VARCHAR(11),
    CONSTRAINT fk_login_user_info FOREIGN KEY (user_phone) REFERENCES User_info(user_phone)
);




