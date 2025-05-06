/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, sequelize) {
    await queryInterface.bulkInsert("Blogs", [
      {
        title: "Điểm chuẩn đại học 2025: Xu hướng tăng hay giảm?",
        content: `Mỗi năm, khi kỳ thi tốt nghiệp THPT kết thúc, hàng triệu học sinh và phụ huynh trên cả nước lại hồi hộp chờ đợi công bố điểm chuẩn của các trường đại học. Điểm chuẩn không chỉ là cột mốc đánh dấu nỗ lực học tập suốt 12 năm mà còn là chiếc chìa khóa mở ra cánh cửa đại học, ảnh hưởng trực tiếp đến con đường học vấn và nghề nghiệp tương lai của các em. Trong những năm gần đây, mặt bằng điểm chuẩn đại học tại Việt Nam có sự biến động nhẹ tùy theo từng nhóm ngành và xu hướng lựa chọn của thí sinh. Đặc biệt, ở các nhóm ngành hot như Y Dược, Công nghệ thông tin, Kinh tế – Luật, mức điểm chuẩn luôn ở mức cao và có xu hướng tăng đều. Chẳng hạn, Đại học Y Hà Nội, Đại học Ngoại thương hay Đại học Bách Khoa Hà Nội đều ghi nhận mức điểm chuẩn trên 26–28 điểm với các tổ hợp xét tuyển chính. Ngược lại, một số ngành xã hội nhân văn, nông lâm hay sư phạm có xu hướng giữ mức điểm ổn định hoặc giảm nhẹ nhằm thu hút thêm thí sinh

Có nhiều yếu tố tác động đến sự biến động điểm chuẩn qua từng năm. Trước hết là số lượng thí sinh đăng ký vào từng ngành, từng trường. Các ngành được dự báo có nhu cầu lao động cao, cơ hội việc làm tốt thì sẽ có đông đảo học sinh đăng ký, kéo theo mức điểm chuẩn tăng lên. Ngoài ra, sự điều chỉnh chỉ tiêu tuyển sinh hàng năm cũng ảnh hưởng lớn đến điểm chuẩn. Một số trường top đầu có xu hướng giảm chỉ tiêu xét điểm thi, tăng chỉ tiêu cho các phương thức xét tuyển kết hợp (chứng chỉ quốc tế, học bạ, bài thi riêng…), điều này khiến mặt bằng điểm chuẩn của phương thức thi THPT đôi khi cao hơn vì “cạnh tranh” gay gắt hơn trong số ít chỉ tiêu còn lại. Chưa kể, sự phát triển mạnh mẽ của các kỳ thi đánh giá năng lực, đánh giá tư duy tại các đại học quốc gia, đại học Bách khoa cũng góp phần phân tán nguồn thí sinh, ảnh hưởng gián tiếp đến điểm chuẩn xét bằng điểm thi tốt nghiệp.

Đứng trước thực tế đó, học sinh lớp 12 cần có chiến lược lựa chọn nguyện vọng thông minh. Việc chỉ dựa vào điểm chuẩn của năm trước để dự đoán là chưa đủ mà cần kết hợp phân tích phổ điểm của kỳ thi, nắm rõ chỉ tiêu tuyển sinh năm nay và xu hướng chọn ngành của bạn bè cùng khóa. Nên chia nguyện vọng thành 3 nhóm: an toàn (chắc chắn đậu), vừa sức và nguyện vọng cao (mơ ước), đồng thời cân nhắc kỹ yếu tố sở thích, năng lực và nhu cầu xã hội. Một ngành học phù hợp sẽ giúp phát huy tốt nhất khả năng bản thân, tránh tình trạng “học nhầm ngành – làm trái nghề” sau khi tốt nghiệp.

Tóm lại, điểm chuẩn đại học 2025 dự kiến sẽ tiếp tục giữ xu hướng ổn định ở phần lớn các ngành, nhưng vẫn có sự phân hóa rõ nét giữa các nhóm ngành hot và các ngành ít thí sinh quan tâm. Việc cập nhật thông tin chính xác và chủ động tìm hiểu kỹ lưỡng là yếu tố then chốt giúp học sinh đưa ra lựa chọn sáng suốt, mở rộng cánh cửa vào đại học mơ ước của mình.`,
        img: "https://res.cloudinary.com/dq4basktt/image/upload/v1743597147/learn_nodejs/wkpgoop1mnup54mto34m.png",
        salary: 25000,
        user_id: 2,
        blog_category_id: 1,
      },
      {
        title:
          "Những điểm mới trong quy chế thi tốt nghiệp THPT và tuyển sinh đại học năm 2025",
        content: `Kỳ thi tốt nghiệp trung học phổ thông (THPT) từ lâu đã trở thành một sự kiện có ý nghĩa quan trọng trong đời học sinh Việt Nam. Đây không chỉ là kỳ thi nhằm công nhận kết quả học tập phổ thông mà còn là căn cứ để xét tuyển vào các trường đại học, cao đẳng trên toàn quốc. Vì vậy, việc nắm chắc các quy định, quy chế thi mới nhất luôn là điều cần thiết để học sinh có sự chuẩn bị kỹ lưỡng, tránh những sai sót đáng tiếc. Năm 2025, Bộ Giáo dục và Đào tạo tiếp tục duy trì hình thức tổ chức kỳ thi tốt nghiệp THPT với cấu trúc gồm ba môn bắt buộc là Toán, Ngữ văn và Ngoại ngữ, cùng với một bài thi tổ hợp tự chọn là Khoa học Tự nhiên (gồm Vật lý, Hóa học, Sinh học) hoặc Khoa học Xã hội (gồm Lịch sử, Địa lý, Giáo dục công dân). Trong đó, môn Ngữ văn thi theo hình thức tự luận, còn lại đều là trắc nghiệm khách quan. Cách tính điểm xét tốt nghiệp vẫn giữ tỷ lệ 70% điểm thi kết hợp 30% điểm trung bình lớp 12, đảm bảo đánh giá toàn diện cả quá trình học tập lẫn năng lực thực tế của học sinh.

Đối với tuyển sinh đại học năm 2025, xu hướng đa dạng hóa phương thức xét tuyển tiếp tục được duy trì. Bên cạnh việc xét tuyển bằng điểm thi tốt nghiệp THPT, nhiều trường đại học áp dụng xét học bạ, xét tuyển kết hợp với chứng chỉ quốc tế (IELTS, TOEFL, SAT…), tuyển thẳng thí sinh đạt giải học sinh giỏi quốc gia, cấp tỉnh hoặc các kỳ thi riêng như đánh giá năng lực của Đại học Quốc gia Hà Nội, TP.HCM, hay kỳ thi đánh giá tư duy của Đại học Bách khoa Hà Nội. Một điểm mới đáng chú ý là nhiều trường tăng cường yêu cầu chứng minh năng lực ngoại ngữ bằng chứng chỉ chuẩn quốc tế đối với các ngành học đặc thù như Kinh tế, Công nghệ thông tin, Y Dược… Đồng thời, quy trình đăng ký nguyện vọng, điều chỉnh nguyện vọng trực tuyến được siết chặt về thời gian và số lần điều chỉnh để đảm bảo công bằng và minh bạch cho thí sinh. Về mặt kỹ thuật tổ chức thi, Bộ Giáo dục và Đào tạo tiếp tục tăng cường ứng dụng công nghệ trong quản lý thi cử, sử dụng phần mềm quét phát hiện thiết bị gian lận, lắp đặt hệ thống camera giám sát chặt chẽ ở tất cả các khâu từ coi thi đến chấm thi nhằm phòng chống gian lận tinh vi bằng thiết bị công nghệ cao.

Nhìn chung, quy chế thi và tuyển sinh năm 2025 giữ tính ổn định về mặt cấu trúc, đồng thời tăng cường tính kỷ luật, minh bạch và an toàn hơn trong khâu tổ chức. Điều này đòi hỏi học sinh phải chủ động cập nhật thông tin từ các nguồn chính thống như cổng thông tin của Bộ Giáo dục, các trường đại học, đồng thời chuẩn bị kỹ về hồ sơ xét tuyển, nắm chắc lịch trình đăng ký để không bỏ lỡ cơ hội vào trường mong muốn. Một sự chuẩn bị đầy đủ về kiến thức, kỹ năng và thông tin sẽ giúp các em học sinh yên tâm bước vào kỳ thi quan trọng, từ đó mở ra cánh cửa tương lai vững chắc cho bản thân.

`,
        img: "https://res.cloudinary.com/dq4basktt/image/upload/v1740802934/learn_nodejs/ptgtu8gi7zzzn9phu3yb.jpg",
        salary: 20000,
        user_id: 2,
        blog_category_id: 1,
      },
      {
        title: "Những vấn đề nổi bật trong kỳ thi tốt nghiệp THPT hiện nay",
        content: `Kỳ thi tốt nghiệp trung học phổ thông (THPT) không chỉ là một sự kiện quan trọng trong đời học sinh mà còn là tâm điểm của toàn xã hội mỗi dịp hè về. Đây là kỳ thi vừa mang tính chất xét tốt nghiệp phổ thông, vừa đóng vai trò then chốt trong việc xét tuyển vào các trường đại học, cao đẳng. Chính vì thế, mỗi năm, kỳ thi này luôn thu hút sự quan tâm đặc biệt của học sinh, phụ huynh, giáo viên cũng như các nhà quản lý giáo dục. Tuy nhiên, bên cạnh những thành công đã đạt được, kỳ thi tốt nghiệp THPT hiện nay vẫn đang đối mặt với không ít thách thức và vấn đề cần được nhìn nhận một cách nghiêm túc để từng bước hoàn thiện hơn.

Một trong những vấn đề nổi bật là áp lực học tập và tâm lý của học sinh. Với mục tiêu “một kỳ thi – hai mục đích”, học sinh phải vừa học để đảm bảo điều kiện tốt nghiệp, vừa ôn luyện để đạt điểm cao phục vụ xét tuyển đại học. Điều này khiến cường độ học tập tăng lên, nhất là ở các lớp 12, dẫn đến căng thẳng tâm lý, mệt mỏi kéo dài. Không ít học sinh rơi vào tình trạng học lệch, học tủ, chỉ tập trung vào những môn xét tuyển đại học mà bỏ bê các môn còn lại, từ đó ảnh hưởng đến sự phát triển toàn diện. Thêm vào đó, sự cạnh tranh gắt gao trong xét tuyển vào các trường đại học top đầu khiến nhiều em chịu áp lực từ gia đình, bạn bè và xã hội, đôi khi dẫn đến những hệ lụy tiêu cực về sức khỏe tinh thần.

Vấn đề tiếp theo là tình trạng chênh lệch chất lượng giáo dục giữa các vùng miền. Học sinh ở thành thị, đặc biệt là các thành phố lớn như Hà Nội, TP.HCM, thường có điều kiện học tập tốt hơn, tiếp cận được nhiều tài liệu, khóa học chất lượng cao và sự hỗ trợ từ giáo viên giàu kinh nghiệm. Trong khi đó, học sinh ở vùng sâu, vùng xa, vùng dân tộc thiểu số lại gặp nhiều khó khăn về cơ sở vật chất, đội ngũ giáo viên và điều kiện học tập, dẫn đến sự bất bình đẳng nhất định trong tiếp cận tri thức và cơ hội đạt kết quả cao. Mặc dù Bộ Giáo dục và Đào tạo đã có những chính sách ưu tiên, cộng điểm khu vực, nhưng việc thu hẹp khoảng cách này vẫn là bài toán dài hạn cần giải quyết.

Ngoài ra, một vấn đề không thể bỏ qua là nguy cơ gian lận trong thi cử. Sự phát triển của công nghệ hiện đại làm xuất hiện nhiều hình thức gian lận tinh vi bằng thiết bị điện tử như tai nghe siêu nhỏ, camera siêu nhỏ, phần mềm can thiệp… Để đối phó, ngành giáo dục đã liên tục siết chặt kỷ luật phòng thi, tăng cường kiểm tra an ninh, sử dụng thiết bị phát hiện gian lận, lắp camera giám sát. Tuy nhiên, việc đảm bảo một kỳ thi tuyệt đối công bằng, nghiêm túc vẫn đòi hỏi sự phối hợp chặt chẽ giữa các cơ quan quản lý, nhà trường, phụ huynh và học sinh.

Cuối cùng, một vấn đề gây nhiều tranh luận là tính thiết thực của kỳ thi trong bối cảnh đa dạng hóa tuyển sinh. Khi nhiều trường đại học đẩy mạnh xét tuyển bằng học bạ, chứng chỉ quốc tế, hoặc các kỳ thi riêng như đánh giá năng lực, đánh giá tư duy, thì vai trò của kỳ thi tốt nghiệp THPT trong xét tuyển đại học đang dần thay đổi. Có ý kiến cho rằng cần tách bạch rõ ràng kỳ thi tốt nghiệp và kỳ thi tuyển sinh đại học để giảm tải áp lực cho học sinh. Tuy nhiên, cũng có quan điểm nhấn mạnh sự cần thiết của một kỳ thi chung nhằm đảm bảo chuẩn đầu ra phổ thông và sự minh bạch trong tuyển sinh.

Tóm lại, kỳ thi tốt nghiệp THPT hiện nay là một kỳ thi quan trọng, có vai trò quyết định đối với tương lai của hàng triệu học sinh. Để kỳ thi thực sự phát huy hiệu quả và công bằng, cần tiếp tục hoàn thiện quy chế, tăng cường hỗ trợ học sinh vùng khó khăn, đảm bảo công tác tổ chức thi nghiêm túc và đồng thời nghiên cứu lộ trình cải tiến phù hợp với xu thế đổi mới giáo dục hiện đại.`,
        img: "https://res.cloudinary.com/dq4basktt/image/upload/v1744718901/learn_nodejs/wspa9em0l8ykzfgtyneo.png",
        salary: 30000,
        user_id: 2,
        blog_category_id: 1,
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
