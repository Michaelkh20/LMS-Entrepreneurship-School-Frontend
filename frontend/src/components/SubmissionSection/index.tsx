'use client';

import React from 'react';
import { PaperClipOutlined } from '@ant-design/icons';
import SimpleSection from '@/components/SimpleSection';
import { Submission } from '@/types/api';
import DownloadFileLink from '../DownloadFileLink';

type Props = {
  submission: Submission | undefined;
};

export default function SubmissionSection({ submission }: Props) {
  return (
    <>
      {/* <h3>Решение</h3> */}
      <SimpleSection title="Статус">
        <div>{submission ? 'Загружено' : 'Не загружено'}</div>
      </SimpleSection>

      {submission && (
        <>
          <SimpleSection title="Номер команды">
            <div>{submission?.team?.number || '-'}</div>
          </SimpleSection>
          <SimpleSection title="Кем сдано">
            <div>{`${submission.owner.surname} ${submission.owner.name}`}</div>
          </SimpleSection>
          <SimpleSection title="Дата и время загрузки">
            <div>{submission.publishedAt.toLocaleString('ru-RU')}</div>
          </SimpleSection>
          <SimpleSection title="Комментарий">
            <div>{submission.payload.textAnswer || '-'}</div>
          </SimpleSection>
          <SimpleSection title="Файлы">
            {submission.payload.attachmentUrls.map((fileName) => {
              return (
                <div style={{ display: 'flex', gap: 4 }} key={fileName}>
                  <PaperClipOutlined />
                  <DownloadFileLink
                    fileName={fileName}
                    url={`${submission.owner.id}/${submission.homework.id}/${fileName}`}
                  />
                </div>
              );
            }) || '-'}
          </SimpleSection>
        </>
      )}
    </>
  );
}
