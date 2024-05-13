import { GetLesson_Response } from '@proto/lessons/lessons_api';

export const VideoSection = ({
  videoUrls,
}: {
  videoUrls: string[] | undefined;
}) => {
  return (
    <>
      {/* <h3>Видеоматерилы</h3> */}
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
            <div
              style={{
                width: '100%',
                aspectRatio: '16/9',
                maxWidth: 450,
              }}
              key={index + videoUrl}
            >
              <iframe
                style={{
                  display: 'block',
                  width: ' 100%',
                  height: '100%',
                }}
                src={`${videoUrl}`}
                title="YouTube video player"
                frameBorder="0"
                allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen={true}
              ></iframe>
            </div>
          );
        })}
      </div>
    </>
  );
};
