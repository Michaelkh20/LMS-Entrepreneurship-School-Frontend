import { PaperClipOutlined } from '@ant-design/icons';

export const PresentationsSection = ({
  presentationUrls,
}: {
  presentationUrls: string[] | undefined;
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        // fontSize: '1rem',
        paddingTop: '1.25rem',
      }}
    >
      <h3>Презентации</h3>
      {presentationUrls?.map((presUrl, index) => {
        return (
          <a
            key={index + presUrl}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '.25rem',
              // textDecoration: 'underline',
            }}
            href={`${presUrl}`}
          >
            <PaperClipOutlined />
            {presUrl}
          </a>
        );
      })}
    </div>
  );
};
