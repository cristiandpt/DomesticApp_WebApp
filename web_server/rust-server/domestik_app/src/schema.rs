// @generated automatically by Diesel CLI.

diesel::table! {
    address (address_loc, user_phone) {
        address_loc -> Varchar,
        user_phone -> Varchar,
    }
}

diesel::table! {
    client (phone) {
        phone -> Varchar,
        services_url -> Nullable<Varchar>,
    }
}

diesel::table! {
    invoice (invoiceid) {
        invoiceid -> Int4,
        total -> Nullable<Float8>,
        serviceid -> Nullable<Int4>,
    }
}

diesel::table! {
    job (jobid) {
        jobid -> Int4,
        name -> Nullable<Varchar>,
    }
}

diesel::table! {
    login (loginid) {
        loginid -> Int4,
        username -> Nullable<Varchar>,
        password -> Nullable<Varchar>,
        access_token -> Nullable<Varchar>,
        refresh_token -> Nullable<Varchar>,
        refresh_token_expiration_date -> Nullable<Date>,
        access_token_expiration_date -> Nullable<Date>,
        user_phone -> Nullable<Varchar>,
    }
}

diesel::table! {
    notification (notificationid) {
        notificationid -> Int4,
        notificationdate -> Nullable<Date>,
        notificationtime -> Nullable<Time>,
        worker_phone -> Nullable<Varchar>,
        serviceid -> Nullable<Int4>,
    }
}

diesel::table! {
    payment (paymentid) {
        paymentid -> Int4,
        paymentdate -> Nullable<Date>,
        invoiceid -> Nullable<Int4>,
        client_phone -> Nullable<Varchar>,
    }
}

diesel::table! {
    payment_method (id) {
        id -> Int4,
        cvv -> Nullable<Int4>,
        owner_name -> Nullable<Varchar>,
        card_number -> Nullable<Varchar>,
        expiration_date -> Nullable<Date>,
        client_phone -> Varchar,
    }
}

diesel::table! {
    rating (ratingid) {
        ratingid -> Int4,
        rate -> Nullable<Float8>,
        serviceid -> Nullable<Int4>,
    }
}

diesel::table! {
    service (serviceid) {
        serviceid -> Int4,
        description -> Nullable<Varchar>,
        status -> Nullable<Varchar>,
        client_phone -> Nullable<Varchar>,
        worker_phone -> Nullable<Varchar>,
        jobid -> Nullable<Int4>,
    }
}

diesel::table! {
    user_info (user_phone) {
        user_phone -> Varchar,
        name -> Nullable<Varchar>,
        lastname -> Nullable<Varchar>,
        email -> Nullable<Varchar>,
        address -> Nullable<Varchar>,
        birth_date -> Nullable<Date>,
        user_type -> Nullable<Varchar>,
        password -> Nullable<Varchar>,
    }
}

diesel::table! {
    worker (phone) {
        phone -> Varchar,
        cc_url -> Nullable<Varchar>,
        available -> Nullable<Bool>,
        pfp_url -> Nullable<Varchar>,
    }
}

diesel::table! {
    worker_job (user_phone, jobid) {
        user_phone -> Varchar,
        jobid -> Int4,
        price -> Nullable<Float8>,
        labortype -> Nullable<Varchar>,
    }
}

diesel::table! {
    worker_rating (id) {
        id -> Int4,
        user_phone -> Varchar,
        ratingid -> Nullable<Int4>,
    }
}

diesel::joinable!(address -> user_info (user_phone));
diesel::joinable!(invoice -> service (serviceid));
diesel::joinable!(login -> user_info (user_phone));
diesel::joinable!(notification -> service (serviceid));
diesel::joinable!(notification -> worker (worker_phone));
diesel::joinable!(payment -> invoice (invoiceid));
diesel::joinable!(payment -> user_info (client_phone));
diesel::joinable!(payment_method -> user_info (client_phone));
diesel::joinable!(rating -> service (serviceid));
diesel::joinable!(service -> job (jobid));
diesel::joinable!(service -> user_info (client_phone));
diesel::joinable!(service -> worker (worker_phone));
diesel::joinable!(worker_job -> job (jobid));
diesel::joinable!(worker_job -> user_info (user_phone));
diesel::joinable!(worker_rating -> rating (ratingid));
diesel::joinable!(worker_rating -> user_info (user_phone));

diesel::allow_tables_to_appear_in_same_query!(
    address,
    client,
    invoice,
    job,
    login,
    notification,
    payment,
    payment_method,
    rating,
    service,
    user_info,
    worker,
    worker_job,
    worker_rating,
);
