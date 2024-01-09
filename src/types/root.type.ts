import {Result} from './result.type'

export type Root = {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}
