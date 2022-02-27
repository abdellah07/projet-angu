/**
 * auth equals 1 admin equals 2 isParkinson and equals 3 isTetra
 */

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  auth: number;
  case: number;

  missclick: number;
  totalQuestion: number;
  pourcentage: number;
  correct: number;
}
