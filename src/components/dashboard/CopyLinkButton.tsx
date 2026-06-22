"use client";

export default function CopyLinkButton({
  formId,
}: {
  formId: string;
}) {
  const copyLink = async () => {
    await navigator.clipboard.writeText(
      `${window.location.origin}/form/${formId}`
    );

    alert("Link copied!");
  };

  return (
    <button
      onClick={copyLink}
      className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl transition"
    >
      Copy Link
    </button>
  );
}