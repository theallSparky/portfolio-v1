// eslint-disable-next-line react/prop-types
const ProjectItem = ({ img, title }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e] hover:scale-105 ease-in duration-200">
      <img src={img} alt={title} className="rounded-xl group-hover:opacity-5" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        <a
          href="https://github.com/theallsparky"
          target="_blank"
          rel="noreferrer"
        >
          <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg hover:scale-110 ease-in duration-150">
            Github repo!
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
