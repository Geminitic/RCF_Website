
const VolunteerForms: React.FC = () => {
  const createSubmitHandler = (endpoint: string) =>
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());
      await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      e.currentTarget.reset();
      alert('Thank you for volunteering!');
    };

  return (
    <div className="grid gap-8 md:grid-cols-2 mt-8">
      <form
        id="rcf-volunteer-form"
        onSubmit={createSubmitHandler('/api/submissions/volunteer')}
        className="space-y-4 bg-white p-6 rounded-xl shadow"
      >
        <h3 className="text-xl font-bold text-emerald-700">Volunteer with RCF</h3>
        <input type="text" name="name" placeholder="Name" className="w-full border p-2 rounded" required />
        <input type="email" name="email" placeholder="Email" className="w-full border p-2 rounded" required />
        <textarea name="message" placeholder="Tell us about yourself" className="w-full border p-2 rounded" />
        <button type="submit" className="px-4 py-2 bg-emerald-600 text-white rounded">Submit</button>
      </form>
      <form
        id="rhizome-syria-form"
        dir="rtl"
        onSubmit={createSubmitHandler('/api/submissions/volunteer')}
        className="space-y-4 bg-white p-6 rounded-xl shadow"
      >
        <h3 className="text-xl font-bold text-emerald-700">تطوع مع رايزوم سوريا</h3>
        <input type="text" name="name" placeholder="الاسم" className="w-full border p-2 rounded text-right" required />
        <input type="email" name="email" placeholder="البريد الإلكتروني" className="w-full border p-2 rounded text-right" required />
        <textarea name="message" placeholder="حدثنا عن نفسك" className="w-full border p-2 rounded text-right" />
        <button type="submit" className="px-4 py-2 bg-emerald-600 text-white rounded">إرسال</button>
      </form>
    </div>
  );
};

export default VolunteerForms;
