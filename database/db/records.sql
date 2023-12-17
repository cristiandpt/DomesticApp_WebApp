-- Additional data for the job table
INSERT INTO job (name)
VALUES 
  ('Housekeeper'),
  ('Gardener'),
  ('Nanny'),
  ('Chef'),
  ('Driver'),
  ('Plumber'),
  ('Electrician'),
  ('Painter'),
  ('Carpenter'),
  ('Cleaner'),
  ('Security Guard'),
  ('Babysitter'),
  ('Dog Walker'),
  ('Personal Assistant'),
  ('Handyman'),
  ('Waiter'),
  ('Waitress'),
  ('Barista'),
  ('Receptionist'),
  ('Janitor'),
  ('IT Specialist'),  -- Added new job
  ('Graphic Designer'),  -- Added new job
  ('Fitness Trainer');  -- Added new job

-- Additional data for the job_type table
INSERT INTO job_type (hour_periodicity, periodicity_description)
VALUES 
  (24, 'daily'),
  (48, 'bi-daily'),
  (168, 'weekly'),
  (720, 'monthly'),
  (1, 'hourly');  -- Added new periodicity


-- Additional data for the user_info table
INSERT INTO user_info (user_phone, name, lastname, email, birth_date, password, user_type)
VALUES
  ('3186459838', 'John', 'Doe', 'john.doe@example.com', '1990-01-15', 'password123', 'client'),
  ('3046822820', 'Alice', 'Smith', 'alice.smith@example.com', '1985-05-20', 'securepass', 'worker'),
  ('3128476962', 'Bob', 'Johnson', 'bob.johnson@example.com', '1988-09-10', 'pass123', 'client');

-- Additional data for the client table
INSERT INTO client (phone, services_url)
VALUES
  ('3186459838', 'https://www.example.com/services/johndoe'),
  ('3046822820', 'https://www.example.com/services/bobjohnson');

-- Additional data for the address table
INSERT INTO address (address_loc, user_phone, lat, lng)
VALUES
  ('Cra. 100 # 5 - 169, Cali, Valle del Cauca', '3186459838', 3.37405095, -76.53953223137889),
  ('Cra. 98 #16-200, Cali, Valle del Cauca', '3046822820', 3.36831945, -76.53025944682176),
  ('Cl. 13 #100-00, El Ingenio, Cali, Valle del Cauca', '3128476962', 3.43722,-76.5225);

-- Additional data for the worker table
INSERT INTO worker (phone, cc_url, available, pfp_url)
VALUES
  ('3046822820', 'https://www.example.com/worker/bob', true, 'https://www.example.com/worker/bob/pfp');

-- Additional data for the worker_job table
INSERT INTO worker_job (worker_phone, job_id, price, job_type_id)
VALUES
  ('3046822820', 22, 25.00, 3),
  ('3046822820', 2, 15.00, 1);

-- Additional data for the service table
INSERT INTO service (description, status, client_phone, worker_phone, job_id)
VALUES
  ('House cleaning', 'Completed', '3186459838', '3046822820', 10),
  ('Graphic design project', 'In Progress', '3128476962', '3046822820', 21);

-- Additional data for the rating table
INSERT INTO rating (rate, service_id, worker_phone)
VALUES
  (4.5, 1, '3046822820'),
  (5.0, 2, '3046822820');

-- Additional data for the invoice table
INSERT INTO invoice (invoice_id, total, service_id)
VALUES
  (1, 50.00, 1),
  (2, 200.00, 2);

-- Additional data for the notification table
INSERT INTO notification (notification_date, notification_time, worker_phone, service_id)
VALUES
  ('2023-01-01', '08:00:00', '3046822820', 1),
  ('2023-02-15', '14:30:00', '3046822820', 2);

-- Additional data for the payment table
INSERT INTO payment (payment_date, invoice_id, client_phone)
VALUES
  ('2023-01-10', 1, '3186459838'),
  ('2023-02-20', 2, '3128476962');

-- Additional data for the payment_method table
INSERT INTO payment_method (cvv, owner_name, card_number, expiration_date, client_phone)
VALUES
  (123, 'John Doe', '**** **** **** 1234', '2025-12-01', '3186459838'),
  (456, 'Alice Smith', '**** **** **** 5678', '2024-08-01', '3128476962');

/*-- Additional data for the login table
INSERT INTO login (login_id, username, password, access_token, refresh_token, refresh_token_expiration_date, access_token_expiration_date, user_phone)
VALUES
  (1, 'johndoe_user', 'hashed_password', 'token123', 'refresh123', '2023-12-31', '2023-01-31', '3186459838'),
  (2, 'bob_worker', 'hashed_password', 'token456', 'refresh456', '2023-12-31', '2023-01-31', '3046822820');*/
