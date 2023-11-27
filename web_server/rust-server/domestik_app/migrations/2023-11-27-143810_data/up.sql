 
CREATE TABLE User_info (
    user_phone VARCHAR(11) PRIMARY KEY,
    name VARCHAR(50),
    lastname VARCHAR(50),
    email VARCHAR(100),
    address VARCHAR(100),
    birth_date DATE,
    user_type VARCHAR(100)
);

CREATE TABLE Address (
    address_loc VARCHAR(100),
    user_phone VARCHAR(11) NOT NULL,
    FOREIGN KEY (user_phone) REFERENCES User_info(user_phone),
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


CREATE TABLE Worker_job (
    user_phone VARCHAR(11) NOT NULL,
    jobId SERIAL NOT NULL,
    price DOUBLE PRECISION,
    laborType VARCHAR(100),
    PRIMARY KEY (user_phone, jobId),
    FOREIGN KEY (user_phone) REFERENCES User_info(user_phone),
    FOREIGN KEY (jobId) REFERENCES Job(jobId)
);


CREATE TABLE Service (
    serviceId SERIAL PRIMARY KEY,
    description VARCHAR(100),
    status VARCHAR(100),
    client_phone VARCHAR(11),
    worker_phone VARCHAR(11),
    jobId INT,
    FOREIGN KEY (client_phone) REFERENCES User_info(user_phone),
    FOREIGN KEY (worker_phone) REFERENCES Worker(phone),
    FOREIGN KEY (jobId) REFERENCES Job(jobId)
);

CREATE TABLE Rating (
    ratingId SERIAL PRIMARY KEY,
    rate FLOAT,
    serviceId INT,
    FOREIGN KEY (serviceId) REFERENCES Service(serviceId)
);

CREATE TABLE Worker_rating (
    id SERIAL PRIMARY KEY,
    user_phone VARCHAR(11) NOT NULL,
    ratingId INT,
    FOREIGN KEY (user_phone) REFERENCES User_info(user_phone),
    FOREIGN KEY (ratingId) REFERENCES Rating(ratingId)
);

CREATE TABLE Invoice (
    invoiceId SERIAL PRIMARY KEY,
    total DOUBLE PRECISION,
    serviceId INT,
    FOREIGN KEY (serviceId) REFERENCES Service(serviceId)
);

CREATE TABLE Notification (
    notificationId SERIAL PRIMARY KEY,
    notificationDate DATE,
    notificationTime TIME,
    worker_phone VARCHAR(11),
    serviceId INT,
    FOREIGN KEY (worker_phone) REFERENCES Worker(phone),
    FOREIGN KEY (serviceId) REFERENCES Service(serviceId)
);

CREATE TABLE Payment (
    paymentId SERIAL PRIMARY KEY,
    paymentDate DATE,
    invoiceId INT,
    client_phone VARCHAR(11),
    FOREIGN KEY (invoiceId) REFERENCES Invoice(invoiceId),
    FOREIGN KEY (client_phone) REFERENCES User_info(user_phone)
);

CREATE TABLE Client (
    phone VARCHAR(11) PRIMARY KEY,
    services_url VARCHAR(255)
);

CREATE TABLE Payment_method (
    id SERIAL PRIMARY KEY,
    cvv INT,
    owner_name VARCHAR(100),
    card_number VARCHAR(100),
    expiration_date DATE,
    client_phone VARCHAR(11) NOT NULL,
    FOREIGN KEY (client_phone) REFERENCES User_info(user_phone)
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
    FOREIGN KEY (user_phone) REFERENCES User_info(user_phone)
);

