// Original file: points.proto

export const UpdateStatus = {
  UnknownUpdateStatus: 'UnknownUpdateStatus',
  Acknowledged: 'Acknowledged',
  Completed: 'Completed',
} as const;

export type UpdateStatus =
  | 'UnknownUpdateStatus'
  | 0
  | 'Acknowledged'
  | 1
  | 'Completed'
  | 2

export type UpdateStatus__Output = typeof UpdateStatus[keyof typeof UpdateStatus]
