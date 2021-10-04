import { storiesOf } from '@storybook/vue'
import Button from "./Button";

storiesOf('Button', module)
    .add('normal', () => ({
        components: { Button },
        template:
            `
      <Button
        :hello="hello"
      />
    `,
        data: () => ({
            hello: "Click Me"
        })
    }))