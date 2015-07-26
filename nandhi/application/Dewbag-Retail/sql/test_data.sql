delete from core_property where id in (61,63);

insert into core_property(id, name, type, value) values(61, 'mail.order.user', 'string', 'sivarajsk@yahoo.com');
insert into core_property(id, name, type, value) values(63, 'mail.order.bcc.user', 'string', 'sivarajs@gmail.com');