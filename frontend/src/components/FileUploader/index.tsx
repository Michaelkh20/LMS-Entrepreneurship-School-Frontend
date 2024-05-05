import React from 'react';
import { Upload, message, type UploadProps, type UploadFile } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { getPresignedUploadUrl } from '@/s3/presignedUrls';

const Dragger = Upload.Dragger;

type Props = {
  hwId: string;
  userId: string;
} & UploadProps;

const FileUploader = ({ hwId, userId, ...uploadProps }: Props) => {
  const customRequest: UploadProps['customRequest'] = async (options) => {
    const { file, onSuccess, onError, onProgress } = options;

    if (typeof file === 'string') {
      return;
    }

    try {
      const filePath = `${userId}/${hwId}/${file.name}`;
      const url = await getPresignedUploadUrl(filePath);

      const xhr = new XMLHttpRequest();

      xhr.onprogress = (ev) => {
        console.log(ev);
        if (ev.lengthComputable && onProgress) {
          (ev as Parameters<typeof onProgress>[0]).percent =
            (ev.loaded * 100) / ev.total;
          onProgress(ev);
        }
      };
      xhr.onerror = onError!;

      xhr.onload = () => {
        if (xhr.status === 200) {
          onSuccess?.(null, xhr);
          console.log('Response:', xhr.responseText);
        }
      };

      xhr.open('PUT', url, true);
      xhr.setRequestHeader('Content-Type', file.type);
      xhr.setRequestHeader('Content-Disposition', 'attachment');
      xhr.send(file);
    } catch (error) {
      // @ts-ignore
      onError?.(error);
    }
  };

  return (
    <Dragger
      {...uploadProps}
      name="file"
      multiple={true}
      customRequest={customRequest}
      onChange={(info) => {
        console.log('onChange', info);
        const { status } = info.file;
        if (status !== 'uploading') {
        }
        if (status === 'done') {
          message.success(`${info.file.name} файл загружен.`);
        } else if (status === 'error') {
          message.error(`${info.file.name} не удалось загрузить файл.`);
        }

        uploadProps.onChange?.(info);
      }}
    >
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">
        Кликните или перетащите файл в эту область для загрузки
      </p>
      <p className="ant-upload-hint">
        Поддерживается одиночная или массовая загрузка.
      </p>
    </Dragger>
  );
};

export default FileUploader;
