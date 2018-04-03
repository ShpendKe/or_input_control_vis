export default function (kibana) {
  return new kibana.Plugin({
    uiExports: {
      visTypes: [
        'plugins/or_input_control_vis/register_vis'
      ]
    }
  });
}
