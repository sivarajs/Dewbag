drop table if exists core_app_entity_sequence;
drop table if exists core_app_entity_state;
drop table if exists core_email;
drop table if exists core_s_m_s;
drop table if exists core_app_feedback;
drop table if exists core_enterprise;
drop table if exists core_organization;
drop table if exists core_hierarchical_entity;
drop table if exists core_language;
drop table if exists loc_address;
drop table if exists loc_city;
drop table if exists loc_city_area;
drop table if exists loc_country;
drop table if exists loc_state;
drop table if exists core_property;
drop table if exists core_property_group;
drop table if exists sec_new_user;
drop table if exists sec_resource_access;
drop table if exists sec_resource_permission;
drop table if exists sec_role;
drop table if exists sec_user;
drop table if exists sec_user_role;
drop table if exists fin_tax;
drop table if exists fin_tax_category;
drop table if exists mark_complimentary_item;
drop table if exists mark_sales_offer;
drop table if exists mdmacc_bank;
drop table if exists mdmacc_bank_account;
drop table if exists mdmacc_bank_name;
drop table if exists mdmbp_business_partner;
drop table if exists mdmbp_business_partner_lead;
drop table if exists mdmbp_customer;
drop table if exists mdmbp_customer_address;
drop table if exists mdmbp_customer_group;
drop table if exists mdmbp_customer_loyalty;
drop table if exists mdmbp_payment_mode;
drop table if exists mdmbp_payment_period;
drop table if exists mdmbp_payment_schedule;
drop table if exists mdmcat_product;
drop table if exists mdmcat_product_category;
drop table if exists mdmcat_product_category_feature;
drop table if exists mdmcat_product_feature;
drop table if exists mdmcat_product_lang;
drop table if exists mdmcat_product_line_item;
drop table if exists mdmcat_product_suggestion;
drop table if exists manufacturer_brand;
drop table if exists manufacturer_manufacturer;
drop table if exists sales_delivery_cut_off_time;
drop table if exists sales_delivery_slot;
drop table if exists sales_offline_sales_order;
drop table if exists sales_sales_invoice;
drop table if exists sales_sales_order;
drop table if exists sales_sales_order_complimentary_item;
drop table if exists sales_sales_order_line_item;
drop table if exists shop_shopping_cart;
drop table if exists shop_shopping_cart_line_item;
drop table if exists shop_customer_subscription;
drop table if exists shop_customer_template;
drop table if exists shop_customer_template_line_item;
drop table if exists shop_shopping_store;
drop table if exists rec_recipe;
drop table if exists rec_recipe_ingredient;
drop table if exists rec_recipe_instruction;

create table core_app_entity_sequence (
    id int not null primary key,
    name varchar(100) not null,
    value bigint not null,
    CONSTRAINT uniqueKey_name UNIQUE (name)
) ENGINE=InnoDB;

create table core_app_entity_state (
    id bigint not null primary key,
    entity varchar(100) not null,
    code int not null,
    status varchar(100) not null,
    CONSTRAINT uniqueKey_entity_code UNIQUE (entity,code)
) ENGINE=InnoDB;

create table core_email (
    id bigint not null primary key auto_increment,
    tos varchar(500) not null,
    ccs varchar(500),
    bccs varchar(500),
    subject varchar(100) not null,
    message text not null,
    content_type varchar(100) not null,
    sent_on timestamp not null,
    reference varchar(100) not null,
    delivered_on timestamp null,
    state varchar(100) not null
) ENGINE=InnoDB;

create table core_s_m_s (
    id bigint not null primary key auto_increment,
    number varchar(100) not null,
    message varchar(256) not null,
    sent_on timestamp not null,
    reference varchar(100) not null,
    delivered_on timestamp null,
    state varchar(100) not null
) ENGINE=InnoDB;

create table core_app_feedback (
    id bigint not null primary key auto_increment,
    email varchar(100) not null,
    feedback varchar(5000) not null
) ENGINE=InnoDB;

create table core_enterprise (
    id bigint not null primary key auto_increment,
    created_by varchar(100) not null,
    created_time timestamp not null,
    modified_by varchar(100),
    modified_time timestamp null,
    name varchar(100) not null,
    description varchar(100) not null
) ENGINE=InnoDB;

create table core_organization (
    id bigint not null primary key auto_increment,
    created_by varchar(100) not null,
    created_time timestamp not null,
    modified_by varchar(100),
    modified_time timestamp null,
    name varchar(100) not null,
    description varchar(100) not null
) ENGINE=InnoDB;

create table core_hierarchical_entity (
    id bigint not null primary key auto_increment,
    name varchar(100) not null,
    parent_id bigint,
    type varchar(100) not null,
    kind varchar(100) not null,
    view_uri varchar(100),
    CONSTRAINT uniqueKey_parentId_name UNIQUE (parent_id,name)
) ENGINE=InnoDB;

create table core_language (
    id bigint not null primary key auto_increment,
    name varchar(100) not null,
    native_name varchar(100),
    CONSTRAINT uniqueKey_name UNIQUE (name)
) ENGINE=InnoDB;

create table loc_address (
    id bigint not null primary key auto_increment,
    address1 varchar(100) not null,
    address2 varchar(100),
    landmark varchar(100),
    area_id bigint not null,
    city_id bigint not null,
    state_id bigint not null,
    country_id bigint not null,
    pin varchar(10) not null,
    latlng varchar(100)
) ENGINE=InnoDB;

create table loc_city (
    id bigint not null primary key auto_increment,
    name varchar(100) not null,
    country_id bigint not null,
    state_id bigint not null
) ENGINE=InnoDB;

create table loc_city_area (
    id bigint not null primary key auto_increment,
    name varchar(100) not null,
    city_id bigint not null
) ENGINE=InnoDB;

create table loc_country (
    id bigint not null primary key auto_increment,
    name varchar(100) not null,
    code varchar(10) not null
) ENGINE=InnoDB;

create table loc_state (
    id bigint not null primary key auto_increment,
    name varchar(100) not null,
    country_id bigint not null,
    code varchar(10) not null
) ENGINE=InnoDB;

create table core_property (
    id bigint not null primary key auto_increment,
    name varchar(100) not null,
    type varchar(100) not null,
    value varchar(2000) not null,
    CONSTRAINT uniqueKey_name UNIQUE (name)
) ENGINE=InnoDB;

create table core_property_group (
    id bigint not null primary key,
    name varchar(100) not null,
    value varchar(100) not null,
    CONSTRAINT uniqueKey_name_value UNIQUE (name,value)
) ENGINE=InnoDB;

create table sec_new_user (
    id bigint not null primary key auto_increment,
    name varchar(100) not null,
    password varchar(100),
    access_token varchar(100),
    primary_role_id bigint not null,
    state varchar(100) not null,
    created_on timestamp not null,
    CONSTRAINT uniqueKey_name UNIQUE (name)
) ENGINE=InnoDB;

create table sec_resource_access (
    id bigint not null primary key auto_increment,
    resource_pattern varchar(100) not null,
    resource_type varchar(100) not null,
    access_type varchar(100) not null,
    is_protected varchar(1) not null,
    permissions_id bigint
) ENGINE=InnoDB;

create table sec_resource_permission (
    id bigint not null primary key auto_increment,
    resource_config_id bigint not null,
    resource_type bigint not null,
    role_id bigint not null
) ENGINE=InnoDB;

create table sec_role (
    id bigint not null primary key auto_increment,
    name varchar(100) not null,
    home varchar(100) not null,
    CONSTRAINT uniqueKey_name UNIQUE (name)
) ENGINE=InnoDB;

create table sec_user (
    id bigint not null primary key auto_increment,
    name varchar(100) not null,
    email varchar(100),
    mobile varchar(100),
    password varchar(100),
    access_token varchar(100),
    primary_role_id bigint not null,
    resource_id bigint,
    state varchar(100) not null,
    CONSTRAINT uniqueKey_email UNIQUE (email)
) ENGINE=InnoDB;

create table sec_user_role (
    id bigint not null primary key auto_increment,
    user_id bigint not null,
    role_id bigint not null
) ENGINE=InnoDB;

create table fin_tax (
    id bigint not null primary key auto_increment,
    name varchar(100) not null,
    tax_category_id bigint not null,
    description varchar(100),
    rate float not null,
    effective_from date not null,
    CONSTRAINT uniqueKey_name UNIQUE (name)
) ENGINE=InnoDB;

create table fin_tax_category (
    id bigint not null primary key auto_increment,
    name varchar(100) not null,
    state_id bigint not null,
    description varchar(100),
    CONSTRAINT uniqueKey_name_state UNIQUE (name,state_id)
) ENGINE=InnoDB;

create table mark_complimentary_item (
    id bigint not null primary key auto_increment,
    created_by varchar(100) not null,
    created_time timestamp not null,
    modified_by varchar(100),
    modified_time timestamp null,
    offer_id bigint not null,
    product_line_item_id bigint not null,
    mrp float not null,
    CONSTRAINT uniqueKey_offerId_productLineItem UNIQUE (offer_id,product_line_item_id)
) ENGINE=InnoDB;

create table mark_sales_offer (
    id bigint not null primary key auto_increment,
    created_by varchar(100) not null,
    created_time timestamp not null,
    modified_by varchar(100),
    modified_time timestamp null,
    title varchar(100) not null,
    start_time date not null,
    end_time date not null,
    product_category_id bigint,
    minimum_purchase bigint,
    customer_types varchar(100),
    discount float not null,
    discount_type_id bigint not null,
    sort_order int,
    is_complimentary_or varchar(1),
    complimentary_items_id bigint,
    CONSTRAINT uniqueKey_title UNIQUE (title)
) ENGINE=InnoDB;

create table mdmacc_bank (
    id bigint not null primary key auto_increment,
    name_id bigint not null,
    code varchar(100) not null,
    address_id bigint not null,
    CONSTRAINT uniqueKey_name UNIQUE (name_id)
) ENGINE=InnoDB;

create table mdmacc_bank_account (
    id bigint not null primary key auto_increment,
    bank_id bigint not null,
    number int not null,
    type_id bigint not null,
    code varchar(100) not null,
    CONSTRAINT uniqueKey_bank_number UNIQUE (bank_id,number)
) ENGINE=InnoDB;

create table mdmacc_bank_name (
    id bigint not null primary key auto_increment,
    name varchar(100) not null,
    CONSTRAINT uniqueKey_name UNIQUE (name)
) ENGINE=InnoDB;

create table mdmbp_business_partner (
    id bigint not null primary key auto_increment,
    name varchar(100) not null,
    CONSTRAINT uniqueKey_name UNIQUE (name)
) ENGINE=InnoDB;

create table mdmbp_business_partner_lead (
    id bigint not null primary key auto_increment,
    company varchar(100) not null,
    contact_person varchar(100) not null,
    email varchar(100) not null,
    mobile varchar(100),
    landline varchar(100),
    message varchar(5000) not null
) ENGINE=InnoDB;

create table mdmbp_customer (
    id bigint not null primary key auto_increment,
    created_by varchar(100) not null,
    created_time timestamp not null,
    modified_by varchar(100),
    modified_time timestamp null,
    group_id bigint not null,
    name varchar(100),
    email varchar(100),
    mobile varchar(100),
    alt_mobile varchar(100),
    landline varchar(100),
    address_id bigint,
    CONSTRAINT uniqueKey_email_mobile UNIQUE (email,mobile)
) ENGINE=InnoDB;

create table mdmbp_customer_address (
    id bigint not null primary key auto_increment,
    customer_id bigint not null,
    address_id bigint not null,
    is_primary varchar(1),
    CONSTRAINT uniqueKey_customerId_address UNIQUE (customer_id,address_id)
) ENGINE=InnoDB;

create table mdmbp_customer_group (
    id bigint not null primary key auto_increment,
    name varchar(100) not null,
    discount float not null,
    CONSTRAINT uniqueKey_name UNIQUE (name)
) ENGINE=InnoDB;

create table mdmbp_customer_loyalty (
    id bigint not null primary key auto_increment,
    customer_id bigint not null,
    points int default 0
) ENGINE=InnoDB;

create table mdmbp_payment_mode (
    id bigint not null primary key auto_increment,
    name varchar(100) not null,
    CONSTRAINT uniqueKey_name UNIQUE (name)
) ENGINE=InnoDB;

create table mdmbp_payment_period (
    id bigint not null primary key auto_increment,
    period varchar(100) not null,
    in_days int not null,
    CONSTRAINT uniqueKey_inDays UNIQUE (in_days)
) ENGINE=InnoDB;

create table mdmbp_payment_schedule (
    id bigint not null primary key auto_increment,
    name varchar(100) not null,
    description varchar(100) not null,
    CONSTRAINT uniqueKey_name UNIQUE (name)
) ENGINE=InnoDB;

create table mdmcat_product (
    id bigint not null primary key auto_increment,
    created_by varchar(100) not null,
    created_time timestamp not null,
    modified_by varchar(100),
    modified_time timestamp null,
    name varchar(100) not null,
    brand varchar(100),
    product_category_id bigint not null,
    description text,
    rating int,
    is_active varchar(1) not null default 'Y',
    tags varchar(100),
    CONSTRAINT uniqueKey_productCategory_name_brand UNIQUE (product_category_id,name,brand)
) ENGINE=InnoDB;

create table mdmcat_product_category (
    id bigint not null primary key auto_increment,
    name varchar(100) not null,
    parent_id bigint,
    type varchar(100) not null,
    kind varchar(100) not null,
    qualified_name varchar(100),
    sort_order int default 0,
    description varchar(100),
    tax_id bigint,
    features_id bigint,
    is_active varchar(1) not null default 'Y',
    tags varchar(100),
    CONSTRAINT uniqueKey_parentId_name UNIQUE (parent_id,name),
    CONSTRAINT uniqueKey_qualifiedName UNIQUE (qualified_name)
) ENGINE=InnoDB;

create table mdmcat_product_category_feature (
    id bigint not null primary key auto_increment,
    category_id bigint not null,
    name varchar(100) not null,
    type_id bigint not null,
    attributes varchar(2000),
    sort_order int not null default 0,
    CONSTRAINT uniqueKey_name UNIQUE (name)
) ENGINE=InnoDB;

create table mdmcat_product_feature (
    id bigint not null primary key auto_increment,
    product_id bigint not null,
    product_category_feature_id bigint not null,
    value varchar(5000)
) ENGINE=InnoDB;

create table mdmcat_product_lang (
    id bigint not null primary key auto_increment,
    product_id bigint not null,
    language_id bigint not null,
    name varchar(100) not null,
    english_writing varchar(100) not null,
    CONSTRAINT uniqueKey_productId_language UNIQUE (product_id,language_id)
) ENGINE=InnoDB;

create table mdmcat_product_line_item (
    id bigint not null primary key auto_increment,
    created_by varchar(100) not null,
    created_time timestamp not null,
    modified_by varchar(100),
    modified_time timestamp null,
    product_id bigint not null,
    code varchar(10) not null,
    search_terms varchar(5000) not null,
    description varchar(5000),
    quantity varchar(100) not null,
    unit_of_measure_id bigint not null,
    package_type_id bigint,
    mrp float not null,
    price float not null,
    savings float not null,
    discount float,
    discount_type_id bigint,
    is_default varchar(1),
    sort_order int,
    is_active varchar(1) not null default 'Y',
    in_stock varchar(1) not null default 'Y',
    is_offer varchar(1) default 'N',
    tags varchar(100),
    CONSTRAINT uniqueKey_code UNIQUE (code),
    CONSTRAINT uniqueKey_product_quantity_unitOfMeasure_packageType UNIQUE (product_id,quantity,unit_of_measure_id,package_type_id)
) ENGINE=InnoDB;

create table mdmcat_product_suggestion (
    id bigint not null primary key auto_increment,
    customer_id bigint,
    email varchar(100),
    suggestion varchar(1000) not null
) ENGINE=InnoDB;

create table manufacturer_brand (
    id bigint not null primary key auto_increment,
    manufacturer_id bigint not null,
    name varchar(100) not null,
    CONSTRAINT uniqueKey_name UNIQUE (name)
) ENGINE=InnoDB;

create table manufacturer_manufacturer (
    id bigint not null primary key auto_increment,
    name varchar(100) not null,
    brands_id bigint,
    CONSTRAINT uniqueKey_name UNIQUE (name)
) ENGINE=InnoDB;

create table sales_delivery_cut_off_time (
    id bigint not null primary key auto_increment,
    time int not null,
    am_pm_id bigint not null,
    CONSTRAINT uniqueKey_time_amPm UNIQUE (time,am_pm_id)
) ENGINE=InnoDB;

create table sales_delivery_slot (
    id bigint not null primary key auto_increment,
    start_time int not null,
    start_am_pm varchar(100) not null,
    end_time int not null,
    end_am_pm varchar(100) not null,
    CONSTRAINT uniqueKey_startTime_startAmPm UNIQUE (start_time,start_am_pm)
) ENGINE=InnoDB;

create table sales_offline_sales_order (
    id bigint not null primary key auto_increment,
    customer_id bigint not null,
    placed_on timestamp not null,
    state_id bigint not null,
    delivery_address_id bigint,
    delivery_date date,
    delivery_slot_id bigint,
    notes varchar(100)
) ENGINE=InnoDB;

create table sales_sales_invoice (
    id bigint not null primary key auto_increment,
    number varchar(100) not null,
    sales_order_id bigint not null,
    notes varchar(100)
) ENGINE=InnoDB;

create table sales_sales_order (
    id bigint not null primary key auto_increment,
    order_id varchar(100),
    customer_id bigint not null,
    session_id varchar(100) not null,
    trans_id varchar(100),
    placed_on timestamp not null,
    state_id bigint not null,
    pay_mode_id bigint not null,
    amount float not null,
    delivery_address_id bigint,
    delivery_date date,
    delivery_slot_id bigint,
    delivery_code varchar(100),
    notes varchar(100),
    flexi_items varchar(5000)
) ENGINE=InnoDB;

create table sales_sales_order_complimentary_item (
    id bigint not null primary key auto_increment,
    offer_id bigint not null,
    product_line_item_id bigint not null,
    mrp float not null,
    CONSTRAINT uniqueKey_offerId_productLineItem UNIQUE (offer_id,product_line_item_id)
) ENGINE=InnoDB;

create table sales_sales_order_line_item (
    id bigint not null primary key auto_increment,
    order_id bigint not null,
    product_line_item_id bigint not null,
    total_price float not null,
    quantity int not null,
    unit_mrp float not null,
    unit_price float not null,
    discount float,
    discount_type_id bigint,
    tax_rate float not null default 0,
    notes varchar(100)
) ENGINE=InnoDB;

create table shop_shopping_cart (
    id bigint not null primary key auto_increment,
    customer_id bigint,
    session_id varchar(100) not null,
    created_on timestamp not null
) ENGINE=InnoDB;

create table shop_shopping_cart_line_item (
    id bigint not null primary key auto_increment,
    cart_id bigint not null,
    product_line_item_id bigint not null,
    quantity int not null,
    total_price float not null
) ENGINE=InnoDB;

create table shop_customer_subscription (
    id bigint not null primary key auto_increment,
    created_by varchar(100) not null,
    created_time timestamp not null,
    modified_by varchar(100),
    modified_time timestamp null,
    name varchar(100) not null,
    state_id bigint not null,
    customer_id bigint not null,
    customer_template_id bigint not null,
    CONSTRAINT uniqueKey_name_customerId UNIQUE (name,customer_id)
) ENGINE=InnoDB;

create table shop_customer_template (
    id bigint not null primary key auto_increment,
    customer_id bigint not null,
    name varchar(100) not null,
    created_on date not null,
    CONSTRAINT uniqueKey_customerId_name UNIQUE (customer_id,name)
) ENGINE=InnoDB;

create table shop_customer_template_line_item (
    id bigint not null primary key auto_increment,
    cart_id bigint not null,
    product_line_item_id bigint not null,
    quantity int not null
) ENGINE=InnoDB;

create table shop_shopping_store (
    id bigint not null primary key auto_increment,
    name varchar(100) not null,
    code varchar(100) not null,
    description varchar(100) not null
) ENGINE=InnoDB;

create table rec_recipe (
    id bigint not null primary key auto_increment,
    name varchar(100) not null,
    meal_type_id bigint not null,
    meal_diet_id bigint not null,
    provided_by varchar(100),
    description text,
    preparation_time int,
    total_serve int,
    tags varchar(100),
    instructions_id bigint,
    ingredients_id bigint,
    CONSTRAINT uniqueKey_name UNIQUE (name)
) ENGINE=InnoDB;

create table rec_recipe_ingredient (
    id bigint not null primary key auto_increment,
    recipe_id bigint not null,
    ingredient varchar(100) not null,
    sort_order int
) ENGINE=InnoDB;

create table rec_recipe_instruction (
    id bigint not null primary key auto_increment,
    recipe_id bigint not null,
    step varchar(100) not null,
    sort_order int
) ENGINE=InnoDB;
