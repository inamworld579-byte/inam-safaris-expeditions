import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const prompt = process.argv.slice(2).join(" ");

if (!prompt) {
  console.log("❌ No prompt provided");
  process.exit(1);
}

try {
  const message = await client.messages.create({
    model: "claude-3-5-sonnet-20240620",
    max_tokens: 1024,
    messages: [{ role: "user", content: prompt }],
  });

  console.log("\n🤖 Claude response:\n");
  console.log(message.content[0].text);
} catch (err) {
  console.error("❌ Error calling Claude API:");
  console.error(err);
}
