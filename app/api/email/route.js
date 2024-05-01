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
  client.sendEmailWithTemplate({
    TemplateId: "35422061",
    From: emailAddress,
    To: emailAddress,
    // From: "k-sugiyama-0u2@eagle.sophia.ac.jp",
    // To: "k-sugiyama-0u2@eagle.sophia.ac.jp",
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

  return Response.json({ res });
}
