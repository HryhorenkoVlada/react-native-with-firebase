import { collection, addDoc } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

export async function seedDatabase(db, storage) {
  /* Series
      ============================================ */
  // Documentaries

  let imgUrl = '';
  await getDownloadURL(ref(storage, 'articles_images/react-native.webp')).then(
    (url) => {
      imgUrl = url;
    }
  );

  await addDoc(collection(db, 'articles'), {
    title: 'React Native',
    description: `
        Here are a few relaxation exercises. But first, be sure that you have a quiet location that is free of distractions and a comfortable body position. As hard as it sounds, try to block out worries and distracting thoughts.
        Rhythmic breathing. If your breathing is short and hurried, slow it down by taking long, slow breaths. Inhale slowly then exhale slowly. Count slowly to five as you inhale, and then count slowly to five as you exhale. As you exhale slowly, pay attention to how your body naturally relaxes. Recognizing this change will help you to relax even more.',
        Deep breathing. Imagine a spot just below your navel. Breathe into that spot, filling your abdomen with air. Let the air fill you from the abdomen up, then let it out, like deflating a balloon. With every long, slow exhalation, you should feel more relaxed.
        Visualized breathing. Find a comfortable place where you can close your eyes, and combine slowed breathing with your imagination. Picture relaxation entering your body and tension leaving your body. Breathe deeply, but in a natural rhythm. Visualize your breath coming into your nostrils, going into your lungs and expanding your chest and abdomen. Then, visualize your breath going out the same way. Continue breathing, but each time you inhale, imagine that you are breathing in more relaxation. Each time you exhale imagine that you are getting rid of a little more tension.`,
    label: 'IT',
    saved: true,
    img: imgUrl,
  });
  //   await addDoc(collection(db, 'articles'), {
  //     title: 'Tailwind: Pros & Cons',
  //     description: `
  //         Here are a few relaxation exercises. But first, be sure that you have a quiet location that is free of distractions and a comfortable body position. As hard as it sounds, try to block out worries and distracting thoughts.
  //         Rhythmic breathing. If your breathing is short and hurried, slow it down by taking long, slow breaths. Inhale slowly then exhale slowly. Count slowly to five as you inhale, and then count slowly to five as you exhale. As you exhale slowly, pay attention to how your body naturally relaxes. Recognizing this change will help you to relax even more.',
  //         Deep breathing. Imagine a spot just below your navel. Breathe into that spot, filling your abdomen with air. Let the air fill you from the abdomen up, then let it out, like deflating a balloon. With every long, slow exhalation, you should feel more relaxed.
  //         Visualized breathing. Find a comfortable place where you can close your eyes, and combine slowed breathing with your imagination. Picture relaxation entering your body and tension leaving your body. Breathe deeply, but in a natural rhythm. Visualize your breath coming into your nostrils, going into your lungs and expanding your chest and abdomen. Then, visualize your breath going out the same way. Continue breathing, but each time you inhale, imagine that you are breathing in more relaxation. Each time you exhale imagine that you are getting rid of a little more tension.`,
  //     label: 'IT',
  //     saved: false,
  //     img: 'tailwind.jpeg',
  //   });
  //   await addDoc(collection(db, 'articles'), {
  //     title: 'Top of the best cars',
  //     description: `
  //         Here are a few relaxation exercises. But first, be sure that you have a quiet location that is free of distractions and a comfortable body position. As hard as it sounds, try to block out worries and distracting thoughts.
  //         Rhythmic breathing. If your breathing is short and hurried, slow it down by taking long, slow breaths. Inhale slowly then exhale slowly. Count slowly to five as you inhale, and then count slowly to five as you exhale. As you exhale slowly, pay attention to how your body naturally relaxes. Recognizing this change will help you to relax even more.',
  //         Deep breathing. Imagine a spot just below your navel. Breathe into that spot, filling your abdomen with air. Let the air fill you from the abdomen up, then let it out, like deflating a balloon. With every long, slow exhalation, you should feel more relaxed.
  //         Visualized breathing. Find a comfortable place where you can close your eyes, and combine slowed breathing with your imagination. Picture relaxation entering your body and tension leaving your body. Breathe deeply, but in a natural rhythm. Visualize your breath coming into your nostrils, going into your lungs and expanding your chest and abdomen. Then, visualize your breath going out the same way. Continue breathing, but each time you inhale, imagine that you are breathing in more relaxation. Each time you exhale imagine that you are getting rid of a little more tension.`,
  //     label: 'Cars',
  //     saved: true,
  //     img: 'cars.webp',
  //   });
}
