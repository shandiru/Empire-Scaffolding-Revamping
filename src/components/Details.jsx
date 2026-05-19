import { useRef, useState } from "react";
import { Building, Home, CheckCircle, Play, Pause } from "lucide-react";

const services = [
    {
        title: "Nottingham City Council",
        subtitle: "From skyline visions to street-level precision - watch our team bring structure to the city with scaffolding solutions built for impact.",
        icon: <Building className="w-7 h-7" />,
        video: "/VIDEO.mp4",
        color: "bg-blue-600 text-white",
        sub: "40-Stroy Project",
        duration: "0:57"
    },
    {
        title: "Sherwood Observatory",
        subtitle: "Watch our team construct a new build at Sherwood Observatory using traditional tube and fit scaffolding, delivering precision and safety for this landmark project.",
        icon: <Home className="w-7 h-7" />,
        video: "/VIDEO1.mp4",
        color: "bg-blue-600 text-white",
        sub: "New Build Project",
        duration: "1:12"
    },
];

const Details = () => {
    return (
        <section id="services" className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-16">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-5xl font-bold mb-2">Scale That Speaks Volumes</h2>
                <p className="text-gray-800 mb-12 text-xl max-w-3xl mx-auto mt-4">
                    From towering commercial complexes to intricate residential projects,
                    witness the magnitude and precision of our scaffolding solutions.
                </p>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {services.map((service, index) => (
                        <VideoCard key={index} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

// Video card with play/pause overlay
const VideoCard = ({ service }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showPause, setShowPause] = useState(false);

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    const handlePause = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-start">
            {/* Video wrapper */}
            <div
                className="w-full h-full rounded-lg overflow-hidden mb-4 relative bg-gray-200 group"
                onMouseEnter={() => setShowPause(true)}
                onMouseLeave={() => setShowPause(false)}
            >
                {service.video ? (
                    <>
                        <video
                            ref={videoRef}
                            src={service.video}
                            className="w-full h-100 object-cover"
                            loop
                            muted
                            playsInline
                        />
                        {/* Play Button */}
                        {!isPlaying && (
                            <button
                                onClick={handlePlay}
                                className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/60 transition"
                            >
                                <Play className="w-12 h-12 text-white bg-blue-600 rounded-full p-4" />
                            </button>
                        )}
                        {/* Pause Button (only visible when hovering & playing) */}
                        {isPlaying && showPause && (
                            <button
                                onClick={handlePause}
                                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition"
                            >
                                <Pause className="w-12 h-12 text-white bg-blue-600 rounded-full p-4" />
                            </button>
                        )}
                    </>
                ) : (
                    <span className="text-gray-500 text-sm flex items-center justify-center h-full">
                        No video available
                    </span>
                )}
            </div>

            {/* Title and icon */}
            <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-lg ${service.color}`}>{service.icon}</div>
                <div>
                    <h3 className="font-semibold text-2xl text-left">{service.title}</h3>
                    {/* <p className="text-sm text-gray-800">{service.subtitle}</p> */}
                </div>
            </div>
            <p className="text-lg text-gray-800 text-left">{service.subtitle}</p>
            <div className="flex justify-between mt-5 w-full">
                <p className="text-gray-800">Duration: {service.duration}</p>
                <p className="text-gray-800">{service.sub}</p>
            </div>

        </div>
    );
};

export default Details;
