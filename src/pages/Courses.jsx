export default function Courses() {
  const courses = [
    {
      title: "Web Development",
      notes: "/notes/web-dev-notes.pdf",
      video: "https://www.youtube.com/embed/3JluqTojuME",
    },
    {
      title: "Data Structures",
      notes: "/notes/data-structures.pdf",
      video: "https://www.youtube.com/embed/RBSGKlAvoiM",
    },
    {
      title: "DBMS",
      notes: "/notes/dbms-notes.pdf",
      video: "https://www.youtube.com/embed/T6H5bv1Z3gE",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-10">📚 Courses & Resources</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2 text-blue-700">{course.title}</h2>

            <a
              href={course.notes}
              className="inline-block text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded mb-4 transition"
              download
            >
              📄 Download Notes
            </a>

            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-48 rounded mt-2"
                src={course.video}
                title={`Video for ${course.title}`}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
