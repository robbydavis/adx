import { background } from '../tokens/semantic/background';
import { text } from '../tokens/semantic/text';
import { border } from '../tokens/semantic/border';
import { icon } from '../tokens/semantic/icon';
import { typography } from '../tokens/semantic/typography';
import { elevation } from '../tokens/semantic/elevation';
export interface Tokens {
    background: typeof background;
    text: typeof text;
    border: typeof border;
    icon: typeof icon;
    typography: typeof typography;
    elevation: typeof elevation;
}
export declare const useTokens: () => Tokens;
//# sourceMappingURL=useTokens.d.ts.map