export default function UserData() {
  const user = [
    {
      name: "Ravindra Hule",
      designation: "Director",
      contact: "+91 9860248685",
      Email: "rbhule1968@gmail.com",
    },
    {
      name: "Saurabh Hule",
      designation: "Technical Director",
      contact: "+91 9060782963",
      Email: "saurabhhule9322@gmail.com",
    },
  ];
  return user;
}

//   {
//     user.map((ele, index) => (
//       <Founder
//         key={index}
//         name={ele.name}
//         desi={ele.designation}
//         contact={ele.contact}
//         email={ele.Email}
//       />
//     ));
//   }