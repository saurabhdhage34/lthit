import React, { useState } from "react";

const images = [
  { id: 1, img: "https://thumbs.dreamstime.com/b/confident-diverse-professional-business-team-standing-modern-office-looking-camera-confident-diverse-professional-business-355588864.jpg", category: "design", title: "UI/UX Strategy", bgColor: "#1e1b4b" },
  { id: 2, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzkbAxlQNiUkx3xhux0WV82PqC3_l4HggHng&s", category: "development", title: "Web Development", bgColor: "#064e3b" },
  { id: 3, img: "https://www.shutterstock.com/image-photo/laptop-statistics-communication-business-people-260nw-2301505077.jpg", category: "marketing", title: "Digital Marketing", bgColor: "#451a03" },
  { id: 4, img: "https://www.shutterstock.com/image-photo/laptop-statistics-communication-business-people-260nw-2301505077.jpg", category: "design", title: "Product Design", bgColor: "#1e1b4b" },
  { id: 5, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmMSmnhPCJ9QqiDo3uz3Ul3XW80NhTtf8P6A&s", category: "development", title: "App Development", bgColor: "#064e3b" },
  { id: 6, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmMSmnhPCJ9QqiDo3uz3Ul3XW80NhTtf8P6A&s", category: "marketing", title: "SEO Optimization", bgColor: "#451a03" },
];

function Gallery() {
  const [filter, setFilter] = useState("all");
  const [bgColor, setBgColor] = useState("#020617");

  const filteredImages =
    filter === "all"
      ? images
      : images.filter((img) => img.category === filter);

  return (
    <div
      className="min-h-screen transition-all duration-700"
      style={{ backgroundColor: bgColor }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* HERO SECTION */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold text-white mb-4">
            Our IT Solutions
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            We deliver cutting-edge digital solutions including design,
            development, and marketing services to help businesses grow.
          </p>
        </div>

        {/* FILTER BUTTONS */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {["all", "design", "development", "marketing"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 backdrop-blur-md border ${
                filter === cat
                  ? "bg-white text-black"
                  : "text-white border-white/20 hover:bg-white/10"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* GALLERY GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredImages.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => setBgColor(item.bgColor)}
              onMouseLeave={() => setBgColor("#020617")}
              className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer bg-white/5 backdrop-blur-lg border border-white/10 hover:shadow-2xl transition-all duration-500"
            >
              {/* IMAGE */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center px-4">
                
                <span className="text-xs text-gray-300 tracking-widest mb-1">
                  {item.category.toUpperCase()}
                </span>

                <h3 className="text-white text-xl font-bold mb-2">
                  {item.title}
                </h3>

                <button className="mt-2 px-4 py-1 text-sm border border-white rounded-full text-white hover:bg-white hover:text-black transition">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;