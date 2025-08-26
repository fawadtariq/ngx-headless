import { FormkitConfig } from "@ngx-headless/formkit";

export const config: FormkitConfig = {
    global: {
        classes: {
            wrapper: 'flex flex-col',
            input: 'rounded-md',
            error: 'text-red-500 text-xs',
            label: 'text-sm font-medium mb-1',
        },
    },
    controls: {
        // 'textarea':{
        //     classes:{
        //         'wrapper': 'test-textarea-wrapper',
        //         'input': 'test-textarea-input',
        //         'label': 'test-textarea-label',
        //         'error': 'test-textarea-error',
        //         'help': 'test-textarea-help'
        //     }
        // }
    }
}