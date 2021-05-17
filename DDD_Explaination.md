# Repository
Trong Domain Driven Design (DDD), repository là 1 thành phần thuộc lớp Infrastructure. Dưới đây là sơ đồ cấu trúc, logic giữa các cấu thành cơ bản trong mô hình DDD.
![Sơ đồ cấu trúc trong Domain Driven Design](https://khalilstemmler.com/img/blog/ddd-intro/ddd-diagram.svg)

Theo sơ đồ trên, ta có thể dễ dàng thấy Repositories đều được Entities và Aggregates liên kết tới, có nghĩa là công việc của nó sẽ liên quan tới 2 thằng trên. Cụ thể như thế nào thì ta sẽ cần hình dung vòng đời của 1 Object trong DDD sẽ ra sao: 
Khi ta khởi tạo Value Object của 1 Aggregates, công việc đó sẽ được ủy quyền cho Factory.  Công việc đó bắt đầu từ việc gọi tới root của Aggregate đó. Vấn đề là nếu mỗi lần khởi tạo 1 Value lại phải gọi ra root và các liên kết liên quan thì điều đó thật sự là không cần thiết, và repository ra đời để nhằm lưu lại, quản lý các liên kết này. 

Ta có thể hình dung Repository như một người thủ thư, mỗi khi chúng ta muốn mượn và trả sách (Aggregrates), chúng ta sẽ đều thực hiện công việc đó qua người thủ thư (Repository). Tất nhiên nếu không có người thủ thư thì chúng ta vẫn có thể tự làm công việc đó, nhưng thời gian sẽ lâu hơn rất nhiều. 

>  **Note:*  Trên đây chỉ là ý hiểu của em về Repository trong DDD. Đối với em đây vẫn là một khái niệm khá mới, nên nếu có gì sai sót, rất mong nhận được góp ý của mọi người.
