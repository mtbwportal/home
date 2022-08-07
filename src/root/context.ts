import { StitchClient } from '@makes-apps/lib';
console.log(process.env.STITCH_APP_ID)
const AppContext = () => new StitchClient(process.env.STITCH_APP_ID || '');
interface AppContext extends ReturnType<typeof AppContext> {}

export default AppContext;
