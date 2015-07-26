delete from sec_role;
insert into sec_role (id, name, home) values(1,'Business Admin','/app/');
insert into sec_role (id, name, home) values(2,'System Admin','/sysadmin/');
insert into sec_role (id, name, home) values(3,'Partner','/partner/');
insert into sec_role (id, name, home) values(4,'Buyer','/customer/');
insert into sec_role (id, name, home) values(5,'Business Operator','/operator/');

delete from sec_user;
insert into sec_user(id, name, password, primary_role_id) values(1, 'admin', '547f28502d56778be1ad038c941b1917', 1);
insert into sec_user(id, name, password, primary_role_id) values(2, 'sysadmin', '597f375e136cf34f9c183d8216f5d63b', 2);
insert into sec_user(id, name, password, primary_role_id) values(3, 'dewbag', 'e5dc8d0ca86f1fb5f2a9684032c953e0', 5);

delete from sec_resource_access;
insert into sec_resource_access(id, resource_pattern, resource_type, access_type) values(1,'/account+.*', 'R', 'ssl');
insert into sec_resource_access(id, resource_pattern, resource_type, access_type, is_protected) values(2,'/app+.*', 'R', 'ssl', 'Y');
insert into sec_resource_access(id, resource_pattern, resource_type, access_type, is_protected) values(3,'/shop/customer+.*', 'R', 'ssl1', 'Y');

delete from core_hierarchical_entity;

insert into core_hierarchical_entity(id, parent_id, type, name, kind) values(1,NULL,'app-setup-menu','General','module');
insert into core_hierarchical_entity(id, parent_id, type, name, kind) values(2,NULL,'app-setup-menu','Security','module');
insert into core_hierarchical_entity(id, parent_id, type, name, kind) values(3,NULL,'app-setup-menu','Property Group','module');

insert into core_hierarchical_entity(id, parent_id, type, name, kind, view_uri) values(11,1,'app-setup-menu','Email','entity','/app/setup/config/Email.xhtml');
insert into core_hierarchical_entity(id, parent_id, type, name, kind, view_uri) values(12,1,'app-setup-menu','Payment Gateway','entity','/app/setup/config/PaymentGateway.xhtml');
insert into core_hierarchical_entity(id, parent_id, type, name, kind, view_uri) values(13,1,'app-setup-menu','Customer Order','entity','/app/setup/config/CustomerOrder.xhtml');

insert into core_hierarchical_entity(id, parent_id, type, name, kind, view_uri) values(21,2,'app-setup-menu','Roles','entity', '/app/setup/security/Roles.xhtml');
insert into core_hierarchical_entity(id, parent_id, type, name, kind, view_uri) values(22,2,'app-setup-menu','Users','entity', '/app/setup/security/Users.xhtml');
insert into core_hierarchical_entity(id, parent_id, type, name, kind) values(23,2,'app-setup-menu','Permissions','entity');

insert into core_hierarchical_entity(id, parent_id, type, name, kind, view_uri) values(31,3,'app-setup-menu','Unit Of Measure','entity', '/app/setup/propertygroup/UnitOfMeasures.xhtml');

insert into core_hierarchical_entity(id, parent_id, type, name, kind) values(101,NULL,'app-module-menu','Master Data Management','module');
insert into core_hierarchical_entity(id, parent_id, type, name, kind) values(102,NULL,'app-module-menu','Financials Management','module');
insert into core_hierarchical_entity(id, parent_id, type, name, kind) values(103,NULL,'app-module-menu','Procurement Management','module');
insert into core_hierarchical_entity(id, parent_id, type, name, kind) values(104,NULL,'app-module-menu','Warehouse Management','module');
insert into core_hierarchical_entity(id, parent_id, type, name, kind) values(105,NULL,'app-module-menu','Sales Management','module');
insert into core_hierarchical_entity(id, parent_id, type, name, kind) values(106,NULL,'app-module-menu','Marketing','module');
insert into core_hierarchical_entity(id, parent_id, type, name, kind) values(107,NULL,'app-module-menu','Store Management','module');


insert into core_hierarchical_entity(id, parent_id, type, name, kind) values(121,101,'app-module-menu','Catalog Management','sub-module');
insert into core_hierarchical_entity(id, parent_id, type, name, kind) values(122,101,'app-module-menu','Customer Management','sub-module');
insert into core_hierarchical_entity(id, parent_id, type, name, kind) values(123,101,'app-module-menu','Partner Management','sub-module');

insert into core_hierarchical_entity(id, parent_id, type, name, kind, view_uri) values(141,121,'app-module-menu','Category','entity','/app/module/mdm/catalog/Category.xhtml');
insert into core_hierarchical_entity(id, parent_id, type, name, kind, view_uri) values(142,121,'app-module-menu','Product','entity','/app/module/mdm/catalog/Product.xhtml');

insert into core_hierarchical_entity(id, parent_id, type, name, kind, view_uri) values(151,122,'app-module-menu','Customer','entity', '/app/module/mdm/customer/Customer.xhtml');
insert into core_hierarchical_entity(id, parent_id, type, name, kind, view_uri) values(152,122,'app-module-menu','Customer Group','entity', '/app/module/mdm/customer/CustomerGroup.xhtml');
insert into core_hierarchical_entity(id, parent_id, type, name, kind, view_uri) values(153,122,'app-module-menu','Customer Loyalty','entity', NULL);

insert into core_hierarchical_entity(id, parent_id, type, name, kind, view_uri) values(171,123,'app-module-menu','Business Partner','entity', '/app/module/mdm/partner/BusinessPartner.xhtml');
insert into core_hierarchical_entity(id, parent_id, type, name, kind, view_uri) values(172,123,'app-module-menu','Payment Mode','entity', '/app/module/mdm/partner/PaymentMode.xhtml');
insert into core_hierarchical_entity(id, parent_id, type, name, kind, view_uri) values(173,123,'app-module-menu','Payment Period','entity', '/app/module/mdm/partner/PaymentSchedule.xhtml');
insert into core_hierarchical_entity(id, parent_id, type, name, kind, view_uri) values(174,123,'app-module-menu','Payment Schedule','entity', '/app/module/mdm/partner/PaymentSchedule.xhtml');


insert into core_hierarchical_entity(id, parent_id, type, name, kind) values(201,102,'app-module-menu','Accounting','sub-module');

insert into core_hierarchical_entity(id, parent_id, type, name, kind, view_uri) values(221,201,'app-module-menu','Tax Category','entity','/app/module/finance/accounting/tax/TaxCategories.xhtml');
insert into core_hierarchical_entity(id, parent_id, type, name, kind, view_uri) values(222,201,'app-module-menu','Tax Rate','entity','/app/module/finance/accounting/tax/TaxRates.xhtml');


insert into core_hierarchical_entity(id, parent_id, type, name, kind) values(301,103,'app-module-menu','Requisition','entity');
insert into core_hierarchical_entity(id, parent_id, type, name, kind) values(302,103,'app-module-menu','Purchase Order','entity');
insert into core_hierarchical_entity(id, parent_id, type, name, kind) values(303,103,'app-module-menu','Goods Receipt','entity');
insert into core_hierarchical_entity(id, parent_id, type, name, kind) values(304,103,'app-module-menu','Reports','module');

insert into core_hierarchical_entity(id, parent_id, type, name, kind, view_uri) values(501,105,'app-module-menu','Sales Order','entity','/app/module/sales/SalesOrder.xhtml');
insert into core_hierarchical_entity(id, parent_id, type, name, kind, view_uri) values(502,105,'app-module-menu','Sales Invoice','entity','/app/module/sales/SalesInvoice.xhtml');


insert into core_hierarchical_entity(id, parent_id, type, name, kind, view_uri) values(601,106,'app-module-menu','Sales Offer','entity','/app/module/marketing/SalesOffer.xhtml');

insert into core_hierarchical_entity(id, parent_id, type, name, kind, view_uri) values(651,107,'app-module-menu','Store','entity','/app/module/store/ShoppingStore.xhtml');

insert into core_hierarchical_entity(id, parent_id, type, name, kind) values(1001,NULL,'app-lifestyle-menu','Recipe Management','module');

insert into core_hierarchical_entity(id, parent_id, type, name, kind, view_uri) values(1021,1001,'app-lifestyle-menu','Recipe','entity', '/app/lifestyle/recipe/index.xhtml');

insert into core_hierarchical_entity(id, parent_id, type, name, kind, view_uri) values(2001,NULL,'app-diagnosis-menu','Feedback','entity', '/app/diagnosis/Feedback.xhtml');




delete from core_language;
insert into core_language(id, name, native_name) values(1, 'English', 'English');
insert into core_language(id, name, native_name) values(2, 'Hindi', 'Hindi');
insert into core_language(id, name, native_name) values(3, 'Tamil', 'Tamil');
insert into core_language(id, name, native_name) values(4, 'Telugu', 'Telugu');
insert into core_language(id, name, native_name) values(5, 'Kannada', 'Kannada');
insert into core_language(id, name, native_name) values(6, 'Malayalam', 'Malayalam');

delete from loc_country;
insert into loc_country(id, name, code) values(1, 'India', 'in');

delete from loc_state;
insert into loc_state(id, name, country_id, code) values(18, 'Karnataka', 1, 'KA');

delete from loc_city;
insert into loc_city(id, name, country_id, state_id) values(1, 'Bangalore', 1, 18);

delete from loc_city_area;
insert into loc_city_area(id, name, city_id) values(1, 'BTM Layout 1st Stage', 1);
insert into loc_city_area(id, name, city_id) values(2, 'BTM Layout 2nd Stage', 1);
insert into loc_city_area(id, name, city_id) values(3, 'Madiwala', 1);
insert into loc_city_area(id, name, city_id) values(4, 'N.S.Palya', 1);
insert into loc_city_area(id, name, city_id) values(5, 'Jaya Nagar 1st Block', 1);
insert into loc_city_area(id, name, city_id) values(6, 'Jaya Nagar 2nd Block', 1);
insert into loc_city_area(id, name, city_id) values(7, 'Jaya Nagar 3rd Block', 1);
insert into loc_city_area(id, name, city_id) values(8, 'Jaya Nagar 4th Block', 1);
insert into loc_city_area(id, name, city_id) values(9, 'Jaya Nagar 5th Block', 1);
insert into loc_city_area(id, name, city_id) values(10, 'Jaya Nagar 6th Block', 1);
insert into loc_city_area(id, name, city_id) values(11, 'Jaya Nagar 7th Block', 1);
insert into loc_city_area(id, name, city_id) values(12, 'Jaya Nagar 8th Block', 1);
insert into loc_city_area(id, name, city_id) values(13, 'Jaya Nagar 9th Block', 1);
insert into loc_city_area(id, name, city_id) values(14, 'JP Nagar 1st Phase', 1);
insert into loc_city_area(id, name, city_id) values(15, 'JP Nagar 2nd Phase', 1);
insert into loc_city_area(id, name, city_id) values(16, 'JP Nagar 3rd Phase', 1);
insert into loc_city_area(id, name, city_id) values(17, 'JP Nagar 4th Phase', 1);
insert into loc_city_area(id, name, city_id) values(18, 'JP Nagar 5th Phase', 1);
insert into loc_city_area(id, name, city_id) values(19, 'Bilekahalli', 1);
insert into loc_city_area(id, name, city_id) values(20, 'Vijaya Bank Layout', 1);
insert into loc_city_area(id, name, city_id) values(21, 'Chikka Audugoi', 1);
insert into loc_city_area(id, name, city_id) values(22, 'Tavarekere', 1);
insert into loc_city_area(id, name, city_id) values(23, 'Bellandur', 1);
insert into loc_city_area(id, name, city_id) values(24, 'Basavanagudi', 1);
insert into loc_city_area(id, name, city_id) values(25, 'Arekere Mico Layout', 1);
insert into loc_city_area(id, name, city_id) values(26, 'Kalena Agrahara', 1);

delete from core_property;

insert into core_property(id, name, type, value) values(51, 'mail.smtp.host', 'string', 'smtpout.asia.secureserver.net');
insert into core_property(id, name, type, value) values(52, 'mail.smtp.port', 'int', '465');
insert into core_property(id, name, type, value) values(53, 'mail.smtp.auth', 'boolean', 'true');
insert into core_property(id, name, type, value) values(54, 'mail.smtp.connectiontimeout', 'int', '60000');
insert into core_property(id, name, type, value) values(55, 'mail.smtp.timeout', 'int', '60000');
insert into core_property(id, name, type, value) values(56, 'mail.smtp.starttls.enable', 'boolean', 'true');
insert into core_property(id, name, type, value) values(57, 'mail.smtp.socketFactory.port', 'int', '465');

insert into core_property(id, name, type, value) values(58, 'mail.user.name', 'string', 'Dewbag.com');
insert into core_property(id, name, type, value) values(59, 'mail.user.email', 'string', 'customercare@dewbag.com');
insert into core_property(id, name, type, value) values(60, 'mail.user.password', 'string', 'Dewbag123');

insert into core_property(id, name, type, value) values(61, 'mail.order.user', 'string', 'order@dewbag.com');
insert into core_property(id, name, type, value) values(62, 'mail.order.password', 'string', 'Dewbag123');
insert into core_property(id, name, type, value) values(63, 'mail.order.bcc.user', 'string', 'sivarajs@gmail.com,kjramesh@gmail.com');

insert into core_property(id, name, type, value) values(66, 'sms.order.mobile', 'string', '919886041305');

insert into core_property(id, name, type, value) values(71, 'mobile.com.port', 'string', 'COM4');
insert into core_property(id, name, type, value) values(72, 'mobile.com.baudRate', 'string', '9600');


insert into core_property(id, name, type, value) values(101, 'mail.maxRetry', 'int', '10');
insert into core_property(id, name, type, value) values(102, 'mail.pollingInterval', 'string', '10000');

insert into core_property(id, name, type, value) values(111, 'payment.ccavenue.merchantId', 'string', 'M_RameshKJ_10202');
insert into core_property(id, name, type, value) values(112, 'payment.ccavenue.workingKey', 'string', 'ppg9smpeibnaifwom2');
insert into core_property(id, name, type, value) values(113, 'payment.ccavenue.redirectURL', 'string', 'https://www.dewbag.com/payment');


insert into core_property(id, name, type, value) values(201, 'customer.order.minimum', 'int', '500');
insert into core_property(id, name, type, value) values(202, 'customer.order.deliverCharge', 'int', '20');

insert into core_property(id, name, type, value) values(221, 'mobile.sms.url', 'string', 'http://onlinesms.in/api/sendValidSMSdataUrl.php?login=9886041305&pword=dewbag123&msg=#{message}&senderid=DEWBAG&mobnum=#{number}');
insert into core_property(id, name, type, value) values(222, 'mobile.bulksms.url', 'string', 'http://onlinesms.in/api/sendValidBulkSMSdataUrl.php?login=9886041305&pword=dewbag123&msg=#{message}&senderid=DEWBAG&mobnum=#{number}');

insert into core_property(id, name, type, value) values(251, 'app.monitor.email', 'string', 'sivarajs@gmail.com');
insert into core_property(id, name, type, value) values(252, 'app.monitor.mobile.number', 'string', '919845919393');
insert into core_property(id, name, type, value) values(253, 'app.monitor.mobile.threshold', 'int', '10');


delete from core_property_group;
insert into core_property_group(id, name, value) values(1, 'attribute-type', 'Single Valued');
insert into core_property_group(id, name, value) values(2, 'attribute-type', 'Multiple Valued');
insert into core_property_group(id, name, value) values(3, 'attribute-type', 'Attribute Group');

insert into core_property_group(id, name, value) values(11, 'unit-of-measure', 'unit');
insert into core_property_group(id, name, value) values(12, 'unit-of-measure', 'kg');
insert into core_property_group(id, name, value) values(13, 'unit-of-measure', 'gm');
insert into core_property_group(id, name, value) values(14, 'unit-of-measure', 'ltr');
insert into core_property_group(id, name, value) values(15, 'unit-of-measure', 'ml');
insert into core_property_group(id, name, value) values(16, 'unit-of-measure', 'pc');
insert into core_property_group(id, name, value) values(17, 'unit-of-measure', 'bunch');
insert into core_property_group(id, name, value) values(18, 'unit-of-measure', 'pack');

insert into core_property_group(id, name, value) values(31, 'package-type', 'Pouch');
insert into core_property_group(id, name, value) values(32, 'package-type', 'Pet Bottle');
insert into core_property_group(id, name, value) values(33, 'package-type', 'Jar');
insert into core_property_group(id, name, value) values(34, 'package-type', 'Tin');
insert into core_property_group(id, name, value) values(35, 'package-type', 'Pack');
insert into core_property_group(id, name, value) values(36, 'package-type', 'Can');

insert into core_property_group(id, name, value) values(51, 'Cash On Delivery/Cheque', 'payment-mode');
insert into core_property_group(id, name, value) values(52, 'Credit Card', 'payment-mode');
insert into core_property_group(id, name, value) values(53, 'Debit Card', 'payment-mode');
insert into core_property_group(id, name, value) values(54, 'Net Banking', 'payment-mode');

insert into core_property_group(id, name, value) values(71, 'discount-type', '%');

insert into core_property_group(id, name, value) values(81, 'bank-account-type', 'Savings');
insert into core_property_group(id, name, value) values(82, 'bank-account-type', 'Corporate');

insert into core_property_group(id, name, value) values(101, 'schedule-period', 'Daily');
insert into core_property_group(id, name, value) values(102, 'schedule-period', 'Every N Days');
insert into core_property_group(id, name, value) values(103, 'schedule-period', 'Weekly');
insert into core_property_group(id, name, value) values(104, 'schedule-period', 'Biweekly');
insert into core_property_group(id, name, value) values(105, 'schedule-period', 'Monthly');

insert into core_property_group(id, name, value) values(1001, 'meal-type', 'Breakfast');
insert into core_property_group(id, name, value) values(1002, 'meal-type', 'Lunch');
insert into core_property_group(id, name, value) values(1003, 'meal-type', 'Dinner');
insert into core_property_group(id, name, value) values(1004, 'meal-type', 'Desert');
insert into core_property_group(id, name, value) values(1005, 'meal-type', 'Appetisers');
insert into core_property_group(id, name, value) values(1006, 'meal-type', 'Snacks');
insert into core_property_group(id, name, value) values(1007, 'meal-type', 'Soup');
insert into core_property_group(id, name, value) values(1008, 'meal-type', 'Salad');
insert into core_property_group(id, name, value) values(1009, 'meal-type', 'Drinks');
insert into core_property_group(id, name, value) values(1010, 'meal-type', 'Others');

insert into core_property_group(id, name, value) values(1031, 'meal-diet', 'Vegetarian');
insert into core_property_group(id, name, value) values(1032, 'meal-diet', 'Non-Vegetarian');



delete from fin_tax_category;
insert into fin_tax_category(id, name, state_id, description) values(1, 'Karnataka VAT', 18, 'Karnataka VAT');

delete from fin_tax;
insert into fin_tax(id, name, tax_category_id, description, rate, effective_from) values(1, 'Karnataka VAT - Nil', 1, 'Karnataka VAT - Nil', 0, '2012-08-02');
insert into fin_tax(id, name, tax_category_id, description, rate, effective_from) values(2, 'Karnataka VAT - 1%', 1, 'Karnataka VAT - 1%', 1, '2012-08-02');
insert into fin_tax(id, name, tax_category_id, description, rate, effective_from) values(3, 'Karnataka VAT - 2%', 1, 'Karnataka VAT - 2%', 1, '2012-08-02');
insert into fin_tax(id, name, tax_category_id, description, rate, effective_from) values(4, 'Karnataka VAT - 5.5%', 1, 'Karnataka VAT - 5.5%', 5.5, '2012-08-01');
insert into fin_tax(id, name, tax_category_id, description, rate, effective_from) values(5, 'Karnataka VAT - 14.5%', 1, 'Karnataka VAT - 14.5%', 14.5, '2012-08-01');
insert into fin_tax(id, name, tax_category_id, description, rate, effective_from) values(6, 'Karnataka VAT - 20%', 1, 'Karnataka VAT - 20%', 20, '2012-08-01');


delete from mdmbp_customer_group;
insert into mdmbp_customer_group(id, name, discount) values(1,'Default', 2);
insert into mdmbp_customer_group(id, name, discount) values(2,'Silver', 4);
insert into mdmbp_customer_group(id, name, discount) values(3,'Gold', 6);
insert into mdmbp_customer_group(id, name, discount) values(4,'Platinum', 8);
insert into mdmbp_customer_group(id, name, discount) values(5,'NGO', -1);

delete from core_app_entity_state;

insert into core_app_entity_state(id, entity, code, status) values(1, "SalesOrder", 1, "New");
insert into core_app_entity_state(id, entity, code, status) values(2, "SalesOrder", 2, "Pending Payment Gateway");
insert into core_app_entity_state(id, entity, code, status) values(3, "SalesOrder", 3, "Customer Submitted");
insert into core_app_entity_state(id, entity, code, status) values(4, "SalesOrder", 4, "In-Process");
insert into core_app_entity_state(id, entity, code, status) values(5, "SalesOrder", 5, "Waiting For Shipment");
insert into core_app_entity_state(id, entity, code, status) values(6, "SalesOrder", 6, "Shipped");
insert into core_app_entity_state(id, entity, code, status) values(7, "SalesOrder", 7, "Delivered");
insert into core_app_entity_state(id, entity, code, status) values(8, "SalesOrder", 8, "Completed");
insert into core_app_entity_state(id, entity, code, status) values(9, "SalesOrder", 9, "Customer Cancelled");
insert into core_app_entity_state(id, entity, code, status) values(10, "SalesOrder", 10, "Cancelled");

delete from sales_delivery_slot;
insert into sales_delivery_slot(id, start_time, start_am_pm, end_time, end_am_pm) values(1, 7, 'AM', 9, 'AM');
insert into sales_delivery_slot(id, start_time, start_am_pm, end_time, end_am_pm) values(2, 11, 'AM', 1, 'PM');
insert into sales_delivery_slot(id, start_time, start_am_pm, end_time, end_am_pm) values(3, 3, 'PM', 5, 'PM');
insert into sales_delivery_slot(id, start_time, start_am_pm, end_time, end_am_pm) values(4, 7, 'PM', 9, 'PM');

delete from core_app_entity_sequence;
insert into core_app_entity_sequence(id, name, value) values(1,'SalesOrder_Id',1);
insert into core_app_entity_sequence(id, name, value) values(2,'InvoiceOrder_Id',1);
insert into core_app_entity_sequence(id, name, value) values(3,'PaymentGateway_Id',1);


delete from mdmacc_bank_name;
insert into mdmacc_bank_name(id, name) values(1, 'State Bank Of India');
insert into mdmacc_bank_name(id, name) values(2, 'ICICI Bank');
insert into mdmacc_bank_name(id, name) values(3, 'HDFC Bank');

delete from mdmacc_bank;
insert into mdmacc_bank(id, name_id, code, address_id) values(1,1,'SBI00009',1);

delete from mdmbp_payment_mode;
insert into mdmbp_payment_mode(id, name) values(1, 'Cash');
insert into mdmbp_payment_mode(id, name) values(2, 'Cheque');
insert into mdmbp_payment_mode(id, name) values(3, 'Wire Transfer');


insert into core_property_group(id, name, value) values(2001, 'subscription-state', 'Active');
insert into core_property_group(id, name, value) values(2002, 'subscription-state', 'Suspended');
insert into core_property_group(id, name, value) values(2003, 'subscription-state', 'Deleted');

