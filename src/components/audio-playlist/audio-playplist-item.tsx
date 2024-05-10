import { cn } from "@/utils/utils";

const AudioPlaylistItem = () => {
  return (
    <li>
      <div className="flex items-center">
        <button
          className={cn(
            "group flex flex-shrink-0 flex-grow items-center px-2 py-3 transition-all duration-200 ease-in hover:bg-white/10",
            // selected_track === encodeURI(track.src)
            //   ? "bg-white/10"
            //   : "bg-transparent"
          )}
        >
          <div className="relative mr-3 flex h-8 w-8 flex-col items-center justify-center text-sm text-white/60">
            {/* {is_playing && selected_track === encodeURI(track.src) ? (
              <BounceIcon />
            ) : (
              index + 1
            )} */}
          </div>
          <span className="text-sm text-white/60 group-hover:text-white">
            {/* {name.slice(38)} */}
          </span>
          <time className="ml-auto block text-xs text-white/60 group-hover:text-white"></time>
        </button>
      </div>
    </li>
  );
};

export default AudioPlaylistItem;
