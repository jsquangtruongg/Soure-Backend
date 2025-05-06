/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, sequelize) {
    await queryInterface.bulkInsert("Job", [
      {
        title: "Tuyển DEV Back-End",
        content:
          "Tuyển nhân viên Back-end lương hấp dẫn và được hưởng những điều kiện tốt nhất từ công ty",
        img: "https://res.cloudinary.com/dq4basktt/image/upload/v1740802934/learn_nodejs/ptgtu8gi7zzzn9phu3yb.jpg",
        salary: "10-20 Triệu",
        experience: "1-2 năm kinh nghiệm",
        location: "Hà Nội",
        Grade: "Nhân viên",
        Education: "Cao Đẵng-Đại Học",
        positions_needed: "20 thành viên",
        work_type: "Phát triển phần mềm",
        user_id: 2,
        jobCategory_id: 1,
      },
      {
        title: "Tuyển Nhân Viên Sale",
        content:
          "Tuyển nhân viên Sale lương hấp dẫn và được hưởng những điều kiện tốt nhất từ công ty",
        img: "https://res.cloudinary.com/dq4basktt/image/upload/v1740972508/learn_nodejs/i8topc8ivjxoebhxzdgc.jpg",
        salary: "15-20 Triệu",
        experience: "Không Cần Kinh Nghiệm",
        location: "Đà Nẵng",
        Grade: "Nhân viên",
        Education: "Cao Đẵng-Đại Học",
        positions_needed: "10 thành viên",
        work_type: "Part-Time",
        user_id: 2,
        jobCategory_id: 1,
      },
      {
        title: "Tuyển Team Thiết Kế Đồ Hoạt",
        content:
          "Tuyển nhân viên Thiết Kế Đồ Hoạ ,hiện tại công ty đã cần một team đầu quân về làm phim hoạt hình,job quanh năm không lo thiếu công việc lương hấp dẫn và được hưởng những điều kiện tốt nhất từ công ty",
        img: "https://res.cloudinary.com/dq4basktt/image/upload/v1744075350/learn_nodejs/pdhpi8yd9yskxapluoqv.jpg",
        salary: "20-30 Triệu",
        experience: "3 năm kinh nghiệm",
        location: "Đà Nẵng",
        Grade: "Nhân viên",
        Education: "Cao Đẵng-Đại Học",
        positions_needed: "15 thành viên",
        work_type: "Thứ 2-Thứ 6",
        user_id: 2,
        jobCategory_id: 1,
      },
      {
        title: "Tuyển Team Chuyên Dịch Thuật",
        content:
          "Tuyển nhân viên Chuyên dịch tiếng Trung Công việc đơn giản dễ làm đã có content sẵn và chỉ cần sub lại sang tiếng trung phụ hợp có các bạn mới ra trường hoặc chuẫn bị tốt nghiệm job quanh năm không lo thiếu công việc lương hấp dẫn và được hưởng những điều kiện tốt nhất từ công ty",
        img: "https://res.cloudinary.com/dq4basktt/image/upload/v1744075350/learn_nodejs/pdhpi8yd9yskxapluoqv.jpg",
        salary: "7-15 Triệu",
        experience: "Biết Tiếng Trung",
        location: "Hồ Chí Minh",
        Grade: "Nhân viên",
        Education: "Cao Đẵng-Đại Học",
        positions_needed: "7 thành viên",
        work_type: "Thứ 2-Thứ 6",
        user_id: 2,
        jobCategory_id: 1,
      },
      {
        title: "Tuyển Team Chuyên Tạo Content",
        content:
          "Hiện tại công ty đang có rất nhiều job hợp tác với các bang truyền thông và hiện tại đang cần các bạn có khả năng sản suất content tốt và có khả năng bắt trend nhanh và năng động giao tiếp tốt luôn là một lợi thế to lớn,thích hợp với các bạn GenZ,còn chần chờ gì nữa hãy apply ngay.",
        img: "https://res.cloudinary.com/dq4basktt/image/upload/v1730508516/learn_nodejs/eoinsrue7opmdxfnf9pi.jpg",
        salary: "10-15 Triệu",
        experience: "Biết Tiếng Trung",
        location: "Đà Nẵng",
        Grade: "Nhân viên",
        Education: "Cao Đẵng-Đại Học",
        positions_needed: "5 thành viên",
        work_type: "Thứ 2-Thứ 6(Remote 2/Tháng)",
        user_id: 2,
        jobCategory_id: 1,
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
