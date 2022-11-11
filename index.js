import * as Tone from 'tone';
  
class ToneSampler {
    constructor (runtime) {
        this.runtime = runtime;
    }
  
    getInfo () {
        return {
            id: 'toneSampler',
            name: formatMessage({
                id: 'toneSampler',
                defaultMessage: 'ToneJS Sampler',
                description: 'ToneJS sampler block(s)'
            }),

            blocks: [
                {
                    opcode: 'toneSamplerBlock',
                    blockType: BlockType.COMMAND,
                    branchCount: 0,
                    terminal: false,
                    blockAllThreads: false,
                    text: formatMessage({
                        id: 'toneSamplerBlock',
                        defaultMessage: 'play [note] using samples: baseURL: [baseUrl] C4: [C4] D#4: [Ds4] F#4: [Fs4] A4: [A4]',
                        description: 'block desc'
                    }),

                    arguments: {
                      
                        note: {
                            type: ArgumentType.STRING,
                            default: formatMessage({
                                id: 'toneSamplerBlock.note',
                                defaultMessage: 'note',
                                description: 'desc ig'
                            })
                                          
                        },

                        C4: {
                            type: ArgumentType.STRING,
                            default: formatMessage({
                                id: 'toneSamplerBlock.C4',
                                defaultMessage: 'link',
                                description: 'desc ig'
                            })
                                          
                        },

                        Ds4: {
                            type: ArgumentType.STRING,
                            default: formatMessage({
                                id: 'toneSamplerBlock.D#4',
                                defaultMessage: 'link',
                                description: 'desc ig'
                            })
                                          
                        },

                        Fs4: {
                            type: ArgumentType.STRING,
                            default: formatMessage({
                                id: 'toneSamplerBlock.F#4',
                                defaultMessage: 'link',
                                description: 'desc ig'
                            })
                                          
                        },

                        A4: {
                            type: ArgumentType.STRING,
                            default: formatMessage({
                                id: 'toneSamplerBlock.A4',
                                defaultMessage: 'link',
                                description: 'desc ig'
                            }) 
                        },

                        baseURL: {
                            type: ArgumentType.STRING,
                            default: formatMessage({
                                id: 'toneSamplerBlock.baseURL',
                                defaultMessage: 'link',
                                description: 'desc ig'
                            })   
                        }
                    }
                }
            ]
            
              toneSampler (args) {
                const note = Cast.toString(args.note);
                const C4 = Cast.toString(args.C4);
                const Ds4 = Cast.toString(args.Ds4);
                const Fs4 = Cast.toString(args.Fs4);
                const A4 = Cast.toString(args.A4);
                const baseURL = Cast.toString(args.baseURL);
                const sampler = new Tone.Sampler({
                  urls: {
                    "C4": C4,
                    "D#4": Ds4,
                    "F#4": Fs4,
                    "A4": A4,
                  },
                  release: 1,
                  baseUrl: baseURL,
                }).toDestination();

                Tone.loaded().then(() => {
                  sampler.triggerAttackRelease([note], 4);
                });
            
              }
        }
}
