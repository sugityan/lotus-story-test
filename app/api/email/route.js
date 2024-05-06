import { client } from "@/postmark";

const emailAddress = process.env.EMAIL_ADDRESS;

export async function POST(request) {
  try {
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

    const response = await client.sendEmailWithTemplate({
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

    console.log("Email sent successfully:", response);
    return Response.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json({ error: "Error sending email" }, { status: 500 });
  }
}
