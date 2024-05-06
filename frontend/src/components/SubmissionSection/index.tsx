'use client';

import React from 'react';
import { PaperClipOutlined } from '@ant-design/icons';
import SimpleSection from '@/components/SimpleSection';
import { SubmissionWithAttachments } from '@/types/api';

type Props = {
  submission: SubmissionWithAttachments | undefined;
};

export default function SubmissionSection({ submission }: Props) {
  return (
    <>
      <h3>Решение</h3>
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
            <div>{submission.textAnswer || '-'}</div>
          </SimpleSection>
          <SimpleSection title="Файлы">
            {submission.attachments.map(({ url, name }) => {
              return (
                <div style={{ display: 'flex', gap: 4 }} key={url}>
                  <PaperClipOutlined />
                  <span>
                    <a
                      style={{ textDecoration: 'underline' }}
                      href={url}
                      download
                    >
                      {name}
                    </a>
                  </span>
                </div>
              );
            }) || '-'}
          </SimpleSection>
        </>
      )}
    </>
  );
}
