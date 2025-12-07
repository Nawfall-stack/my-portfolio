import { Card, CardDescription, CardFooter, CardHeader, CardTitle, Avatar, AvatarFallback, AvatarImage, TypographyH1 } from '@/components/shadcn-component';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      "The design is great and has its own distinctive character—neat and stylish, perfect for those who want a simple design that's full of meaning. Especially the logo, which has a creative shape and is equally captivating. Overall, it's excellent.",
    image: '/my-photo.jp',
    name: 'Abdurrahman Haidar Hanif',
    username: 'haidarhanif_674',
    initialname: 'AHH',
  },
  {
    quote: 'The design is good and matches the request, and the designer is responsive, so changes are handled quickly.',
    image: '/my-photo.jp',
    name: 'Muhammad Dwiki Herlambang',
    username: 'lam.mellark18',
    initialname: 'MDH',
  },

];

export function Testimonial() {
  return (
    <div className="w-full max-w-6xl px-4 md:px-6 mx-auto py-12 flex flex-col gap-8">
      <div className={'m-auto'}>
        <TypographyH1>Testimonial</TypographyH1>
      </div>
      <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'}>
        {testimonials.map((testimonial) => (
          <Card key={testimonial.name} className={'justify-between'}>
            <CardHeader className={'flex flex-col gap-4'}>
              <div className="flex">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} strokeWidth={1} />
                ))}
              </div>
              <p>"{testimonial.quote}"</p>
            </CardHeader>
            <CardFooter className={'flex gap-4'}>
              <Avatar>
                <AvatarImage src={testimonial.image} />
                <AvatarFallback>{testimonial.initialname}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{testimonial.name}</CardTitle>
                <CardDescription>{testimonial.username}</CardDescription>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
