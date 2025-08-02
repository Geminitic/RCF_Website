import React from 'react';

const OrgRegistrationForms: React.FC = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        alert('Thank you for registering!');
        form.reset();
      } else {
        alert('Submission failed. Please try again.');
      }
    } catch {
      alert('Submission failed. Please try again.');
    }
  };

  return (
    <div className="grid gap-8 md:grid-cols-2 mt-8">
      <form
        method="POST"
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-xl shadow"
      >
        <h3 className="text-xl font-bold text-emerald-700">
          Register Your Organization
        </h3>
        <input
          type="text"
          name="org"
          placeholder="Organization Name"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact Person"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          name="message"
          placeholder="How would you like to collaborate?"
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-emerald-600 text-white rounded"
        >
          Submit
        </button>
      </form>
      <form
        method="POST"
        dir="rtl"
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-xl shadow"
      >
        <h3 className="text-xl font-bold text-emerald-700">سجل منظمتك</h3>
        <input
          type="text"
          name="org"
          placeholder="اسم المنظمة"
          className="w-full border p-2 rounded text-right"
          required
        />
        <input
          type="text"
          name="contact"
          placeholder="اسم الشخص المسؤول"
          className="w-full border p-2 rounded text-right"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="البريد الإلكتروني"
          className="w-full border p-2 rounded text-right"
          required
        />
        <textarea
          name="message"
          placeholder="كيف تود التعاون؟"
          className="w-full border p-2 rounded text-right"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-emerald-600 text-white rounded"
        >
          إرسال
        </button>
      </form>
    </div>
  );
};

export default OrgRegistrationForms;
