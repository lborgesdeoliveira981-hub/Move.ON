import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  RotateCcw, 
  Sparkles, 
  CheckCircle2, 
  Maximize2,
  ListVideo,
  ArrowRight
} from 'lucide-react';
import { VideoBriefing, VIDEO_BRIEFINGS } from '../data/videoBriefings';

interface AiVideoPlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialVideoId?: string;
  onScheduleCall?: () => void;
}

export const AiVideoPlayerModal: React.FC<AiVideoPlayerModalProps> = ({
  isOpen,
  onClose,
  initialVideoId,
  onScheduleCall
}) => {
  const [currentVideo, setCurrentVideo] = useState<VideoBriefing>(
    VIDEO_BRIEFINGS.find(v => v.id === initialVideoId) || VIDEO_BRIEFINGS[0]
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeSubtitleIndex, setActiveSubtitleIndex] = useState(0);

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const progressIntervalRef = useRef<any>(null);

  // Update current video when initialVideoId changes
  useEffect(() => {
    if (initialVideoId) {
      const found = VIDEO_BRIEFINGS.find(v => v.id === initialVideoId);
      if (found) {
        stopAudio();
        setCurrentVideo(found);
        setProgress(0);
        setActiveSubtitleIndex(0);
      }
    }
  }, [initialVideoId]);

  // Cleanup on unmount or close
  useEffect(() => {
    if (!isOpen) {
      stopAudio();
    }
  }, [isOpen]);

  const stopAudio = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }
    setIsPlaying(false);
  };

  const startPlayback = (video: VideoBriefing) => {
    stopAudio();
    setIsPlaying(true);

    if (typeof window !== 'undefined' && 'speechSynthesis' in window && !isMuted) {
      const utterance = new SpeechSynthesisUtterance(video.audioNarrative);
      utterance.lang = 'pt-BR';
      utterance.rate = 1.05; // natural pacing
      utterance.pitch = video.presenter.name.includes('Sofia') ? 1.05 : 0.95;

      // Select Portuguese voice if available
      const voices = window.speechSynthesis.getVoices();
      const ptVoice = voices.find(v => v.lang.startsWith('pt'));
      if (ptVoice) {
        utterance.voice = ptVoice;
      }

      utterance.onend = () => {
        setIsPlaying(false);
        setProgress(100);
      };

      utteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    }

    // Simulate progress and subtitle pacing
    const totalDurationSeconds = 40; // demonstration duration
    let currentSec = 0;
    progressIntervalRef.current = setInterval(() => {
      currentSec += 0.5;
      const pct = Math.min(100, (currentSec / totalDurationSeconds) * 100);
      setProgress(pct);

      const subtitleStep = Math.min(
        video.scriptParagraphs.length - 1,
        Math.floor((pct / 100) * video.scriptParagraphs.length)
      );
      setActiveSubtitleIndex(subtitleStep);

      if (pct >= 100) {
        clearInterval(progressIntervalRef.current);
        setIsPlaying(false);
      }
    }, 500);
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      startPlayback(currentVideo);
    }
  };

  const handleSelectVideo = (video: VideoBriefing) => {
    stopAudio();
    setCurrentVideo(video);
    setProgress(0);
    setActiveSubtitleIndex(0);
    startPlayback(video);
  };

  const toggleMute = () => {
    if (isMuted) {
      setIsMuted(false);
      if (isPlaying) {
        startPlayback(currentVideo);
      }
    } else {
      setIsMuted(true);
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in">
      <div className="glass-panel bg-[#070B14] border border-cyan-500/30 max-w-5xl w-full rounded-2xl overflow-hidden shadow-2xl relative flex flex-col max-h-[92vh]">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-slate-900/50">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
              Central de Vídeos com Apresentadores IA · MOVE.ON
            </span>
          </div>

          <button
            onClick={() => {
              stopAudio();
              onClose();
            }}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-900 border border-slate-800 transition-colors"
            aria-label="Fechar reprodutor de vídeo"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Screen & Sidebar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-y-auto">
          {/* Main Video Viewport (Col 8) */}
          <div className="lg:col-span-8 flex flex-col bg-black relative">
            {/* Visual Frame */}
            <div className="relative aspect-video w-full overflow-hidden bg-slate-950 flex items-center justify-center">
              <img
                src={currentVideo.thumbnail}
                alt={currentVideo.title}
                referrerPolicy="no-referrer"
                className={`w-full h-full object-cover object-center transition-transform duration-700 ${
                  isPlaying ? 'scale-105 filter brightness-105' : 'scale-100 filter brightness-90'
                }`}
              />

              {/* Cinematic Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 pointer-events-none" />

              {/* Presenter Lower Third Badge */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2.5 p-2 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 text-xs">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-semibold text-white">{currentVideo.presenter.name}</span>
                <span className="text-slate-400 text-[11px] hidden sm:inline">({currentVideo.presenter.role})</span>
              </div>

              {/* Big Center Play Overlay (when paused) */}
              {!isPlaying && (
                <button
                  onClick={togglePlay}
                  className="absolute z-20 w-16 h-16 rounded-full bg-blue-600/90 hover:bg-blue-500 text-white flex items-center justify-center shadow-2xl shadow-blue-500/50 hover:scale-110 active:scale-95 transition-all group"
                  aria-label="Iniciar reprodução de vídeo"
                >
                  <Play className="w-7 h-7 translate-x-0.5 fill-white" />
                </button>
              )}

              {/* Audio Waveform Animation (when playing) */}
              {isPlaying && !isMuted && (
                <div className="absolute top-4 right-4 z-10 flex items-end gap-1 p-2 rounded-lg bg-black/75 backdrop-blur-md border border-cyan-500/30">
                  <div className="w-1 h-3 bg-cyan-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-1 h-5 bg-cyan-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-1 h-2 bg-cyan-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                  <div className="w-1 h-4 bg-cyan-400 animate-bounce" style={{ animationDelay: '75ms' }} />
                  <span className="text-[10px] text-cyan-300 font-mono ml-1.5 font-bold uppercase">Áudio IA Ativo</span>
                </div>
              )}

              {/* Subtitles / Legendas Dinâmicas */}
              <div className="absolute bottom-4 left-4 right-4 z-10 text-center">
                <div className="inline-block max-w-xl mx-auto px-4 py-2 rounded-lg bg-black/85 backdrop-blur-md border border-white/10 text-xs sm:text-sm text-slate-100 font-medium shadow-2xl leading-relaxed">
                  {isPlaying ? (
                    currentVideo.scriptParagraphs[activeSubtitleIndex] || currentVideo.scriptParagraphs[0]
                  ) : (
                    <span>Clique no play para ouvir a explicação da IA em áudio e vídeo</span>
                  )}
                </div>
              </div>
            </div>

            {/* Video Controls Bar */}
            <div className="p-4 bg-slate-950 border-t border-slate-800/80 flex flex-col gap-2.5">
              {/* Timeline Scrubber */}
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden cursor-pointer">
                <div 
                  className="bg-gradient-to-r from-blue-600 to-cyan-400 h-full rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Bottom Buttons */}
              <div className="flex items-center justify-between text-xs text-slate-300">
                <div className="flex items-center gap-3">
                  <button
                    onClick={togglePlay}
                    className="p-1.5 rounded-md hover:bg-slate-800 text-white transition-colors"
                    aria-label={isPlaying ? "Pausar" : "Tocar"}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                  </button>

                  <button
                    onClick={() => {
                      setProgress(0);
                      startPlayback(currentVideo);
                    }}
                    className="p-1.5 rounded-md hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                    title="Reiniciar vídeo"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={toggleMute}
                    className="p-1.5 rounded-md hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                    title={isMuted ? "Ativar áudio da IA" : "Silenciar áudio"}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
                  </button>

                  <span className="font-mono text-[11px] text-slate-400">
                    {currentVideo.duration} · Duração Executiva
                  </span>
                </div>

                <div className="text-[11px] text-slate-400 hidden sm:block">
                  Narração Sintetizada por Inteligência Artificial
                </div>
              </div>
            </div>

            {/* Key Takeaways in 3 Punchy Bullets (Anti-Text Wall) */}
            <div className="p-5 bg-[#090E1A] border-t border-slate-800/80">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Resumo Executivo em 3 Tópicos:</span>
              </div>
              <div className="space-y-1.5">
                {currentVideo.summaryBullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Playlist Sidebar (Col 4) */}
          <div className="lg:col-span-4 p-5 bg-[#0B1220] border-t lg:border-t-0 lg:border-l border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                <ListVideo className="w-4 h-4 text-cyan-400" />
                <span>Outros Vídeos Explicativos:</span>
              </div>

              {/* Video List */}
              <div className="space-y-2.5">
                {VIDEO_BRIEFINGS.map((vid) => {
                  const isSelected = vid.id === currentVideo.id;
                  return (
                    <button
                      key={vid.id}
                      onClick={() => handleSelectVideo(vid)}
                      className={`w-full p-3 rounded-xl text-left border transition-all duration-200 flex items-start gap-3 ${
                        isSelected
                          ? 'bg-blue-950/70 border-cyan-400 shadow-md shadow-cyan-500/10'
                          : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="relative w-16 h-10 rounded-md overflow-hidden bg-slate-950 shrink-0">
                        <img
                          src={vid.thumbnail}
                          alt={vid.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <Play className={`w-3 h-3 ${isSelected ? 'text-cyan-400 fill-cyan-400' : 'text-white fill-white'}`} />
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className={`text-xs font-bold line-clamp-1 ${isSelected ? 'text-cyan-300' : 'text-white'}`}>
                          {vid.title}
                        </h4>
                        <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                          {vid.presenter.name} · {vid.duration}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CTA Box at Bottom of Sidebar */}
            <div className="pt-6 border-t border-slate-800 mt-6">
              <div className="p-3.5 rounded-xl bg-gradient-to-br from-blue-950 to-slate-900 border border-blue-800/40 text-center">
                <span className="text-xs font-semibold text-white block mb-2">
                  Deseja uma apresentação personalizada para sua diretoria?
                </span>
                <button
                  onClick={() => {
                    stopAudio();
                    onClose();
                    if (onScheduleCall) onScheduleCall();
                  }}
                  className="w-full py-2 px-3 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Agendar Apresentação Executiva</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
