import React, { useState } from 'react';

export default function CyberInfra() {
  const [open, setOpen] = useState(false);

  return (
    <div className="preview-stage">
      <p className="pv-hint">
        Rapport d'audit de sécurité détaillant la configuration d'un laboratoire de test, l'exploitation d'une vulnérabilité critique (backdoor FTP vsftpd) et les mesures de remédiation recommandées.
      </p>

      <div 
        className="dash-card" 
        style={{ cursor: "pointer", marginBottom: open ? "16px" : "0" }}
        onClick={function () { setOpen(!open); }}
      >
        <div className="dash-glyph" style={{ background: "linear-gradient(135deg, #7f1d1d, #ef4444)" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        </div>
        <div className="dash-info">
          <h5>Audit de Sécurité — Exploitation &amp; Remédiation</h5>
          <p>CVE-2011-2523 vsftpd · Kali Linux &amp; Metasploit · Rapport complet</p>
        </div>
        <button 
          className="dash-launch" 
          style={{ border: "none", background: open ? "var(--soft-2)" : "var(--accent)", color: open ? "var(--ink)" : "#fff", cursor: "pointer" }}
          onClick={function (e) {
            e.stopPropagation();
            setOpen(!open);
          }}
        >
          {open ? "Replier ▲" : "Dérouler ▼"}
        </button>
      </div>

      {open && (
        <div className="audit-report">
          <div className="audit-section">
            <h4>1. Contexte et Objectif</h4>
            <p>
              Ce projet a pour but de configurer un environnement de laboratoire sécurisé (Home Lab) afin d'identifier et d'exploiter des vulnérabilités connues sur un serveur cible. L'objectif final est d'obtenir un accès administrateur (<b>Root</b>) pour démontrer l'impact critique d'un service obsolète et mal configuré, puis de proposer des solutions de remédiation.
            </p>
          </div>

          <div className="audit-section">
            <h4>2. Environnement de Laboratoire</h4>
            <div className="audit-grid">
              <div className="audit-grid-card">
                <b>Hyperviseur</b>
                VirtualBox <span style={{ fontSize: "12px", color: "var(--muted)" }}>(Réseau privé hôte / Host-Only Adapter pour une isolation totale)</span>
              </div>
              <div className="audit-grid-card">
                <b>Machine Attaquante</b>
                Kali Linux
              </div>
              <div className="audit-grid-card">
                <b>Machine Cible</b>
                Metasploitable 2 <span style={{ fontSize: "12px", color: "var(--accent)" }}>(IP : 192.168.56.104)</span>
              </div>
            </div>
          </div>

          <div className="audit-section">
            <h4>3. Méthodologie</h4>
            
            <h5>Phase 1 : Reconnaissance et Énumération</h5>
            <p>
              Après avoir validé la connectivité réseau via la commande <span className="audit-code-span">ping</span>, un scan de ports ciblé a été lancé pour identifier les services exposés sur la cible. Une attention particulière a été portée au port 21 (FTP).
            </p>
            <div className="audit-code-block">nmap -sV -p 21 192.168.56.104</div>
            <p style={{ marginTop: "6px" }}>
              <b>Résultat :</b> Le port 21 est ouvert et exécute le service <span className="audit-code-span" style={{ color: "#f59e0b" }}>vsftpd 2.3.4</span>.
            </p>

            <h5>Phase 2 : Identification de la Vulnérabilité</h5>
            <p>
              La version vsftpd 2.3.4 abrite une porte dérobée (backdoor) malveillante <span className="audit-badge-vuln">CVE-2011-2523</span>. Si un utilisateur tente de se connecter avec un identifiant contenant un smiley <span className="audit-code-span">:)</span>, le service ouvre silencieusement un accès de type shell avec les privilèges root sur le port 6200, sans exiger de mot de passe.
            </p>

            <h5>Phase 3 : Exploitation</h5>
            <p>
              L'outil Metasploit Framework a été utilisé pour automatiser l'exploitation de cette faille.
              Commandes exécutées dans <span className="audit-code-span">msfconsole</span> :
            </p>
            <div className="audit-code-block">
{`use exploit/unix/ftp/vsftpd_234_backdoor
set RHOSTS 192.168.56.104
exploit`}
            </div>

            <h5>Phase 4 : Post-Exploitation</h5>
            <p>
              L'exploit a réussi, générant un accès direct (dumb shell) sur la machine cible en arrière-plan. La commande <span className="audit-code-span">whoami</span> a confirmé l'obtention des privilèges maximums <span className="audit-code-span" style={{ color: "#ef4444" }}>root</span>.
            </p>

            <div className="audit-img-wrap">
              <img src="assets/cyber-audit-msf.png" alt="Console d'exploitation Metasploit vsftpd 2.3.4" />
              <div className="audit-img-caption">Visualisation de la backdoor vsftpd_234_backdoor exécutée avec succès sur Kali Linux</div>
            </div>

            <p>
              Pour prouver la compromission totale du système, le fichier sensible contenant les empreintes cryptographiques des mots de passe a été lu via la commande :
            </p>
            <div className="audit-code-block">cat /etc/shadow</div>
          </div>

          <div className="audit-section" style={{ borderLeft: "4px solid #52b788" }}>
            <h4>4. Recommandations (Remédiation)</h4>
            <div className="audit-list">
              <div className="audit-list-item">
                <div>
                  <span className="audit-badge-rem">Mise à jour</span>
                  <b>Mettre à jour le service :</b> Remplacer immédiatement vsftpd 2.3.4 par une version récente et corrigée.
                </div>
              </div>
              <div className="audit-list-item">
                <div>
                  <span className="audit-badge-rem">Protocole sécurisé</span>
                  <b>Changer de protocole :</b> Privilégier des protocoles chiffrés comme SFTP (SSH File Transfer Protocol) au lieu du FTP classique qui fait transiter les données en clair sur le réseau.
                </div>
              </div>
              <div className="audit-list-item">
                <div>
                  <span className="audit-badge-rem">Filtrage</span>
                  <b>Filtrage réseau :</b> Configurer un pare-feu (Firewall) pour restreindre l'accès au service de transfert de fichiers aux seules adresses IP de confiance.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
