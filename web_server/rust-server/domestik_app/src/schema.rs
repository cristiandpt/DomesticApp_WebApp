// @generated automatically by Diesel CLI.

diesel::table! {
    address (address_loc, user_phone) {
        #[max_length = 100]
        address_loc -> Varchar,
        #[max_length = 11]
        user_phone -> Varchar,
        lat -> Nullable<Float8>,
        lng -> Nullable<Float8>,
    }
}

diesel::table! {
    client (phone) {
        #[max_length = 11]
        phone -> Varchar,
        #[max_length = 255]
        services_url -> Nullable<Varchar>,
    }
}

diesel::table! {
    invoice (invoice_id) {
        invoice_id -> Int4,
        total -> Nullable<Float8>,
        service_id -> Int4,
    }
}

diesel::table! {
    job (job_id) {
        job_id -> Int4,
        #[max_length = 50]
        name -> Nullable<Varchar>,
    }
}

diesel::table! {
    job_type (id) {
        id -> Int4,
        hour_periodicity -> Nullable<Int4>,
        #[max_length = 100]
        periodicity_description -> Nullable<Varchar>,
    }
}

diesel::table! {
    login (login_id) {
        login_id -> Int4,
        #[max_length = 100]
        username -> Nullable<Varchar>,
        #[max_length = 100]
        password -> Nullable<Varchar>,
        #[max_length = 100]
        access_token -> Nullable<Varchar>,
        #[max_length = 100]
        refresh_token -> Nullable<Varchar>,
        refresh_token_expiration_date -> Nullable<Date>,
        access_token_expiration_date -> Nullable<Date>,
        #[max_length = 11]
        user_phone -> Varchar,
    }
}

diesel::table! {
    notification (notification_id) {
        notification_id -> Int4,
        notification_date -> Nullable<Date>,
        notification_time -> Nullable<Time>,
        #[max_length = 11]
        worker_phone -> Varchar,
        service_id -> Int4,
    }
}

diesel::table! {
    payment (payment_id) {
        payment_id -> Int4,
        payment_date -> Nullable<Date>,
        invoice_id -> Int4,
        #[max_length = 11]
        client_phone -> Varchar,
    }
}

diesel::table! {
    payment_method (id) {
        id -> Int4,
        cvv -> Nullable<Int4>,
        #[max_length = 100]
        owner_name -> Nullable<Varchar>,
        #[max_length = 100]
        card_number -> Nullable<Varchar>,
        expiration_date -> Nullable<Date>,
        #[max_length = 11]
        client_phone -> Varchar,
    }
}

diesel::table! {
    rating (rating_id) {
        rating_id -> Int4,
        rate -> Nullable<Float8>,
        service_id -> Int4,
        #[max_length = 11]
        worker_phone -> Varchar,
    }
}

diesel::table! {
    service (service_id) {
        service_id -> Int4,
        #[max_length = 100]
        description -> Nullable<Varchar>,
        #[max_length = 100]
        status -> Nullable<Varchar>,
        #[max_length = 11]
        client_phone -> Varchar,
        #[max_length = 11]
        worker_phone -> Varchar,
        job_id -> Int4,
    }
}

diesel::table! {
    user_info (user_phone) {
        #[max_length = 11]
        user_phone -> Varchar,
        #[max_length = 50]
        name -> Varchar,
        #[max_length = 50]
        lastname -> Varchar,
        #[max_length = 100]
        email -> Varchar,
        birth_date -> Nullable<Date>,
        #[max_length = 255]
        password -> Nullable<Varchar>,
        #[max_length = 100]
        user_type -> Nullable<Varchar>,
    }
}

diesel::table! {
    worker (phone) {
        #[max_length = 11]
        phone -> Varchar,
        #[max_length = 255]
        cc_url -> Nullable<Varchar>,
        available -> Nullable<Bool>,
        #[max_length = 255]
        pfp_url -> Nullable<Varchar>,
    }
}

diesel::table! {
    worker_job (worker_phone, job_id) {
        #[max_length = 11]
        worker_phone -> Varchar,
        job_id -> Int4,
        price -> Nullable<Float8>,
        job_type_id -> Int4,
    }
}

diesel::joinable!(address -> user_info (user_phone));
diesel::joinable!(invoice -> service (service_id));
diesel::joinable!(login -> user_info (user_phone));
diesel::joinable!(notification -> service (service_id));
diesel::joinable!(notification -> worker (worker_phone));
diesel::joinable!(payment -> client (client_phone));
diesel::joinable!(payment -> invoice (invoice_id));
diesel::joinable!(payment_method -> client (client_phone));
diesel::joinable!(rating -> service (service_id));
diesel::joinable!(rating -> worker (worker_phone));
diesel::joinable!(service -> client (client_phone));
diesel::joinable!(service -> job (job_id));
diesel::joinable!(service -> worker (worker_phone));
diesel::joinable!(worker_job -> job (job_id));
diesel::joinable!(worker_job -> job_type (job_type_id));
diesel::joinable!(worker_job -> worker (worker_phone));

diesel::allow_tables_to_appear_in_same_query!(
    address,
    client,
    invoice,
    job,
    job_type,
    login,
    notification,
    payment,
    payment_method,
    rating,
    service,
    user_info,
    worker,
    worker_job,
);
