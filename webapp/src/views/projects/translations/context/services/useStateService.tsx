import { container } from 'tsyringe';

import { usePutTranslationState } from 'tg.service/TranslationHooks';
import { parseErrorResponse } from 'tg.fixtures/errorFIxtures';
import { useProject } from 'tg.hooks/useProject';
import { MessageService } from 'tg.service/MessageService';

import { SetTranslationState } from '../types';
import { useTranslationsService } from './useTranslationsService';
import { TranslatedError } from 'tg.translationTools/TranslatedError';

const messaging = container.resolve(MessageService);

type Props = {
  translations: ReturnType<typeof useTranslationsService>;
};

export const useStateService = ({ translations }: Props) => {
  const putTranslationState = usePutTranslationState();
  const project = useProject();

  const changeState = (data: SetTranslationState) =>
    putTranslationState.mutate(
      {
        path: {
          projectId: project.id,
          translationId: data.translationId,
          state: data.state,
        },
      },
      {
        onSuccess(response) {
          translations.changeTranslations([
            { keyId: data.keyId, language: data.language, value: response },
          ]);
        },
        onError(e) {
          const parsed = parseErrorResponse(e);
          parsed.forEach((error) =>
            messaging.error(<TranslatedError code={error} />)
          );
        },
      }
    );

  return {
    changeState,
    isLoading: putTranslationState.isLoading,
  };
};
