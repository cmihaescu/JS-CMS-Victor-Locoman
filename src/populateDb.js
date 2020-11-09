const populate = async posts => {
  const isDbPopulated = await posts.find().count();


// @todo: populează de aici baza de date cu mai multe intrări pentru a fi ușor de testat
const populate = () => {
    db.add('posts', {
        title: '🚀 My first blog post!!!',
        content: 'Mai am de facut tema, scroll to article, eventual paginatie. Well, it works. Welcome to my blog. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
        slug:'post-1'
    });
    db.add('posts', {
        title: '🚀 My second blog post!!!',
        content: 'Well, it works. Welcome to my blog. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
        slug:'post-2'
    });
    db.add('posts', {
        title: '🚀 My third blog post!!!',
        content: 'Well, it works. Welcome to my blogjfhdgdhdgh.At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
        slug:'post-3'

  if (isDbPopulated) return; // dacă avem deja postări, ne oprim aici.


  const result = await posts.insertMany([
    {
      title: '🚀 My first blog post!!!',
      content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus, erat quis porta euismod, quam justo blandit lectus, eu vulputate tortor felis sit amet magna. Phasellus porta orci vel mollis posuere. Donec vitae ullamcorper est, at interdum nisi. Etiam massa quam, pellentesque vel blandit non, laoreet sed urna. Donec fermentum nulla libero, ac viverra erat interdum vitae. Vivamus vulputate nec ex a fringilla. Suspendisse potenti. Sed finibus, nibh nec blandit rutrum, purus massa ornare dui, a scelerisque mauris sapien quis tortor.

        <p>Donec sodales purus ac odio imperdiet, eu sagittis erat scelerisque. Suspendisse sit amet sapien laoreet, rhoncus lorem id, luctus massa. Proin vitae tempor mi. Nunc est est, volutpat id tellus et, euismod suscipit tellus. Proin eleifend sollicitudin est vitae gravida. Curabitur faucibus, sem vitae feugiat aliquet, velit lacus interdum augue, eleifend bibendum metus mauris ut dolor. Suspendisse fringilla maximus venenatis. Aliquam at tortor facilisis, sagittis nibh non, tristique orci. Nullam pretium lectus eget odio venenatis pretium. Fusce tempor ut quam a facilisis. Phasellus ut faucibus nibh. Sed vitae mattis enim.

        <p>Maecenas quis viverra ipsum. Duis venenatis augue sit amet lorem dapibus, et efficitur est tincidunt. Morbi pretium vehicula tempus. Donec bibendum neque eu purus malesuada, sed tempus dui dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non metus eu ex consectetur fermentum nec tincidunt justo. Nam gravida dolor enim, eget tincidunt enim blandit eu. Ut dignissim hendrerit dui, pellentesque volutpat diam iaculis nec. Nunc in dictum lacus, a varius purus. Proin rhoncus tellus vel purus malesuada feugiat a nec ante. Vestibulum vitae suscipit lectus, vitae molestie augue. Cras viverra euismod enim, ac eleifend velit tempor id. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        `,
      slug: 'post-1',
    },
    {
      title: '✏️ My first blog post!!!',
      content: 'Well, it works. Welcome to my blog.',
      slug: 'my-first-blog-post',
    },
    {
      title: '❓ My first blog post!!!',
      content: 'Well, it works. Welcome to my blog.',
      slug: 'post-3',
    },
  ]);
  console.log(`DB prepopulated with ${result.insertedCount} posts`);
};

module.exports = populate;
