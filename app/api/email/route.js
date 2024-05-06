import { client } from "@/postmark";

const emailAddress = process.env.EMAIL_ADDRESS;

export async function POST(request) {
  const res = await request.json();
  const {
    name,
    phoneNum,
    email,
    people,
    branch,
    selectedDate,
    selectedTime,
    orders,
    option,
  } = res;

  console.log("This is emailAddress", emailAddress);

  client.sendEmailWithTemplate({
    TemplateId: "35422061",
    From: emailAddress,
    To: emailAddress,
    TemplateModel: {
      name: name,
      phoneNum: phoneNum,
      email: email,
      people: people,
      branch: branch,
      selectedDate: selectedDate,
      selectedTime: selectedTime,
      orders: orders,
      option: option,
    },
  });

  // client.sendEmailWithTemplate({
  //   TemplateId: "35422061",
  //   From: emailAddress,
  //   To: email,
  //   TemplateModel: {
  //     name: name,
  //     phoneNum: phoneNum,
  //     email: email,
  //     people: people,
  //     branch: branch,
  //     selectedDate: selectedDate,
  //     selectedTime: selectedTime,
  //     orders: orders,
  //     option: option,
  //   },
  // });

  return Response.json({ res });
}
