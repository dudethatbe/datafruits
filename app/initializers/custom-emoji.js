import emojione from 'emojione';

export function initialize(/* application */) {
  // application.inject('route', 'foo', 'service:foo');
  const customEmojis = {
    ':bgs:': {
      custom: true,
      uc_base: 'bgs',
      uc_output: '',
      shortnames: [':bgs:'],
      keywords: ['bgs'],
    },
    ':tony:': {
      custom: true,
      uc_base: 'tony',
      uc_output: '',
      shortnames: [':firedrill:', ':freedrull:', ':mcfiredrill:'],
      keywords: ['firedrill', 'freedrull', 'mcfiredrill'],
    },
    ':ovenrake:': {
      custom: true,
      uc_base: 'ovenrake',
      uc_output: '',
      shortnames: [':dakota:', ':oven:'],
      keywords: ['dakota', 'oven'],
    },
    ':snailzone:': {
      custom: true,
      uc_base: 'snailzone',
      uc_output: '',
      shortnames: [':snailzone:'],
      keywords: ['snail', 'slimethru'],
    },
    ':trekkie:': {
      custom: true,
      uc_base: 'trekkie',
      uc_output: '',
      shortnames: [':trekkie:', ':trekkietrax:'],
      keywords: ['trekkie', 'trekkietrax'],
    },
    ':datafruits:': {
      custom: true,
      animated: true,
      uc_base: 'datafruits',
      uc_output: '',
      shortnames: [':datafruits:', ':datacoin:'],
      keywords: ['datafruits', 'datacoin'],
      extension: 'gif',
    },
    ':salad_dressing:': {
      custom: true,
      uc_base: 'salad_dressing',
      uc_output: '',
      shortnames: [':salad_dressing:', ':onion_salad_dressing:', ':saladdressing:', ':onionsaladdressing:'],
      keywords: ['salad', 'dressing'],
    },
    ':trash:': {
      custom: true,
      animated: true,
      uc_base: 'cooltrash',
      uc_output: '',
      shortnames: [':trash:', ':cooltrash:'],
      keywords: ['trash', 'cooltrash'],
    },
    ':pizza_spin:': {
      custom: true,
      animated: true,
      uc_base: 'pizza_spin',
      uc_output: '',
      shortnames: [':pizza_spin:'],
      keywords: ['pizza_spin'],
    },
    ':jambox:': {
      custom: true,
      animated: true,
      uc_base: 'jambox',
      uc_output: '',
      shortnames: [':jambox:'],
      keywords: ['jambox'],
    },
  };
  Object.keys(customEmojis).forEach((emoji) => {
    emojione.emojioneList[emoji] = customEmojis[emoji];
  });
  emojione.shortnames = emojione.shortnames.concat(`|${Object.keys(customEmojis).join('|')}`);
  //emojione.shortnames = emojione.shortnames.concat("|:bgs:");

  emojione.regShortNames = new RegExp(
    '<object[^>]*>.*?</object>|<span[^>]*>.*?</span>|<(?:object|embed|svg|img|div|span|p|a)[^>]*>|(' +
      emojione.shortnames +
      ')',
    'gi',
  ); //eslint-disable-line no-useless-escape

  //emojione.imagePathPNG = "/assets/images/emojis/";
  emojione.customImagePathPNG = '/assets/images/emojis/';
}

export default {
  name: 'custom-emoji',
  initialize,
};
