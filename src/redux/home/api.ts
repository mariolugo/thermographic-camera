import type { ApiType, APIResponse } from './types';

import type { ImageRepresentation, DataRepresentation } from './representations';

export default (api: ApiType) => {
  return {
    getImage: (): Promise<APIResponse<ImageRepresentation>> => {
      return api.get(`api/preview`);
    },
    getValues: (): Promise<APIResponse<DataRepresentation>> => {
      return api.get(`api/data`);
    },
  };
};
