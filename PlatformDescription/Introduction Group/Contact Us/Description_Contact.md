# Đây là mô tả cho trang Contact
Trong trang Contact có phần gửi ý kiến của người dùng.

Đây là thành phần yêu cầu cần có xử lý.

# Implementation Plan
TÔI SẼ TUÂN THỦ DOMAIN DRIVEN DESIGN.

// to be continued. Bàn với đội dev về kế hoạch ở đây.

# File Structure
* /application:
	* /Contact:
		* Contact.ts: chứa cấu trúc dữ liệu của Contact Entity
		* ContactAgrregate.ts: chứa Contact(Entity) và danh sách email của đội CRM (Value Object)(factory cho ContactAggregate sẽ nằm trong ContactAggregate.ts)
		* /repository: quản lý hoạt động của ContactAggregate với database
			* repo-contact-implementation.ts (factory cho repo sẽ nằm trong repo-contact-implementation.ts)
		* /email-helper: quản lý hoạt động của Contact với email
			* contact-email-implementation.ts (factory cho email-helper sẽ nằm trong contact-email-implementation.ts)
	
	* /Adapter: chuẩn bị các thư viện sẵn sàng để sử dụng bởi các thành phần platform.
		* prisma.ts
		* emailjs.ts
	
	* repo-interface.ts: repository interface chung cho mọi repo khác.
	* email-interface.ts: email interface chung cho mọi email helper khác.
	
* /infrastructure:
	* /prisma