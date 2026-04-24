export default {
  title: 'Components/Alert'
};

export const Success = () => `
  <div class="ds-alert ds-alert--success" role="status">
    Your request has been submitted successfully.
  </div>
`;

export const Warning = () => `
  <div class="ds-alert ds-alert--warning" role="status">
    Registration for this event closes tomorrow at 5 p.m.
  </div>
`;

export const Danger = () => `
  <div class="ds-alert ds-alert--danger" role="alert">
    There was a problem submitting the form. Please review the required fields.
  </div>
`;