import { GetLesson_Response } from '@proto/lessons/lessons_api';

export const VideoSection = ({
  videoUrls,
}: {
  videoUrls: string[] | undefined;
}) => {
  return (
    <div
      style={{
        display: 'flex',
        // flexDirection: 'column',
        flexWrap: 'wrap',
        gap: '1rem',
      }}
    >
      {videoUrls?.map((videoUrl, index) => {
        return (
          <iframe
            key={index + videoUrl}
            style={{
              width: '100%',
              minHeight: '300px',
              maxWidth: '600px',
              height: '70%',
            }}
            src={`${videoUrl}`}
            title="YouTube video player"
            frameBorder="0"
            allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen={true}
          ></iframe>
        );
      })}
    </div>
  );
};
