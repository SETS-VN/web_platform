# Đây là tài liệu mở đầu để hiểu cơ bản về thiết kế DDD
DDD là một thiết kế mở rộng của mô hình MVC. DDD là một thiết kế phục vụ cho lập trình hướng đối tượng.

Tất cả chúng ta đều học về hướng đối tượng trên trường. Ai cũng được học về class, interface, inheritance, polymorphism, ... và đa số quên. Sử dụng nó với nhau thế nào? đa số không biết.

Chính bản thân người viết cũng cảm thấy rất ngỡ ngàng khi đọc cuốn sách: "Design Patterns: Elements of Reusuable Object-Oriented Software" khi nhận ra mình vẫn đếch biết gì về Object-Oriented hết dù học và làm nhiều Object-Oriented Software.

Trên trường chỉ dạy ta các thành phần cơ bản như: viên gạch, hộp sơn, gói xi măng, .... Trường không dạy ta cách kết hợp chúng vào với nhau thế nào để ra được một ngôi nhà đẹp. __Trường dạy ta cách làm thợ xây chính chứ không dạy ta cách trở thành một kiến trúc sư.__

# Object
Object là trung tâm. Mọi thứ phải xoay xung quanh nó.

1. Định nghĩa Object:
Định nghĩa một Object là một công việc khó. Kể cả những chuyên gia cũng phải nhiều lần thử - sai mới định nghĩa được đầy đủ một Object hoặc là không bao giờ định nghĩa được đầy đủ một Object.

Ta xét một Object dựa trên:
* Cấu trúc nội tại của nó (Structure, Responsibility, Scope, ...)
* Mối quan hệ (Relationship) với các Object khác.
* Sự tương tác (Collaboration) với các Object khác.

Hiểu được 3 cái này là một thử thách. Một khi hiểu và biết cách vận dụng, ta sẽ có thể uyển chuyển thiết kế Object. Chỉ khi đó, ta mới thấy được vẻ đẹp và sự ăn khớp của OOP. Chỉ khi đó, ta mới có thể trở thành __Master of Object Bender__. 

# DDD Layers
DDD có 4 layer: Interface, Application, Domain, và Infrastructure.

1. Lịch sử phát triển của mô hình DDD
DDD là một cải tiến của mô hình MVC (Model, View, Controller). 
	* Model chứa Application Object (aka Application Layer) xử lý data.
	* View thể hiện User Interface. 
	* Controller xử lý User Input.

MVC là một cải tiến của thời kì loạn thiết kế.

* Thời kỳ miền viễn Tây của thiết kế: 
Thời kì xa xưa, vùng đất lập trình vẫn còn hoang sơ như miền Tây nước Mỹ. Mọi thứ vẫn còn rất loạn lạc. Nhiều lập trình viên nhét phần xử lý vào luôn với Interface cho nhanh, cho tiện, dễ hình dung.

![3 views to 3 models](Picture\3V_3M.png)

VD như ở hình trên, trước khi có MVC. Lập trình viên thường viết gộp luôn phần xử lý vào với phần giao diện cho nhanh. Đây là thực trạng của đa số sinh viên hiện nay. Chắc chắn người đọc đã từng mắc lỗi này. 

Điểm tệ hại là nếu như cần nhiều views hơn, models phức tạp hơn thì sinh viên phải viết thêm rất nhiều code, __Super Fun!__. Nhưng khốn nạn nhất vẫn phải là phần sửa code. Thêm một tính năng mới hoặc phải debug nghĩa là phải track xem sửa ở đâu và sửa thế nào trên tất cả các models, __Fun Pro Max!__. 

* Thời kỳ Trật Tự của mô hình MVC:
![3 views to 1 model](Picture\3V_1M.png)

VD như ở hình trên, sau khi có MVC. View và Model được seperate. View và Model làm việc với nhau theo cơ chế Subscribe/Notify. Bất cứ View nào cũng có thể subcribe theo 1 model bất kỳ để nhận Notification. Model sẽ Notify View nếu có thay đổi dữ liệu. View nhận được Notification sẽ thay đổi theo đó. 

Kiểu làm việc này giúp giảm bớt code phải viết và dễ sửa hơn. Cái rất khó là phải xác định được model tổng quát để phục vụ nhiều views. Cái gì cho vào model, cái gì không? Specific quá thì khó reuse, Abstract quá thì không miêu tả đủ model.

* Thời kỳ DDD:
//picture about DDD layers here.

DDD thay đổi những điều sau với MVC:
	* DDD tách phần Model thành hai phần Application Layer và Domain Layer
	* DDD gộp hai phần View và Controller thành Interface Layer
	* DDD thêm phần Infrastructure Layer.

Việc tách Model ra thành hai phần Application Layer và Domain Layer giúp người thiết kế tập trung vào việc xây dựng Business Logic (Domain Layer), vốn là thành phần quan trọng nhất của Software. Việc tách ra nghĩa là hai thành phần này có thể phát triển riêng biệt với nhau miễn là tuân thủ các __điều khoản hợp tác__. Cứ cái gì mà tách ra được thì nghĩa là độ linh hoạt tăng. Độ linh hoạt tăng thì reuse được tốt.

2. Giải thích từng layers:


# Objects ở trong DDD layers như thế nào?
Hai phần trên là hai phần lí thuyết. Phần này phân tích một ví dụ thực tế về cách mà Objects được thiết kế để nằm trong DDD Layers.

Đọc tiếp bài "Objects-in-DDD.md"