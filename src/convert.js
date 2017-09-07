const json2md = require('json2md');

json2md.converters.item = ({ author, repository, preview, description }) => {
  const git_uri = 'https://github.com';
  const star_uri = 'https://img.shields.io/github/stars';
  let output = `[${repository}](${git_uri}/${author}/${repository})`;
  output += ` ![](${star_uri}/${author}/${repository}.svg?label=%E2%98%85)`;
  output += ` ${description}`;
  output += ` [@${author}](${git_uri}/${author})`;
  if (preview) output += ` [😎](${preview})`;
  return output;
};

module.exports = (lists) => {
  const outputJSON = lists.map((list) => {
    return [
      {
        h3: list.type,
      },
      {
        ul: list.items.map(item => {
          return { item };
        }),
      },
    ];
  });

  outputJSON.unshift({
    blockquote: 'A list of client to [CNodejs](https://cnodejs.org)',
  });
  outputJSON.unshift({
    h2: 'Awesome-CNode'
  });
  outputJSON.push({
    p: '*[CNodejs API List](https://cnodejs.org/api)*',
  });

  return json2md(outputJSON);
}
