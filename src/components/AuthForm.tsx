import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLogin && formData.password !== formData.confirmPassword) {
      toast.error("Passwords don't match!");
      return;
    }
    toast.success(`${isLogin ? "Login" : "Signup"} successful!`);
  };

  return (
    <div className="w-full max-w-md p-8 rounded-xl backdrop-blur-lg bg-glass shadow-xl border border-white/20 animate-fadeIn">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">
        {isLogin ? "Welcome Back" : "Create Account"}
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Input
            type="email"
            placeholder="Email"
            className="bg-glass border-white/20 text-white placeholder:text-white/70"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Input
            type="password"
            placeholder="Password"
            className="bg-glass border-white/20 text-white placeholder:text-white/70"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
        </div>

        {!isLogin && (
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Confirm Password"
              className="bg-glass border-white/20 text-white placeholder:text-white/70"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              required
            />
          </div>
        )}

        <Button
          type="submit"
          className="w-full bg-primary hover:bg-primary-dark text-white transition-colors"
        >
          {isLogin ? "Login" : "Sign Up"}
        </Button>
      </form>

      <p className="mt-4 text-center text-white/80">
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="ml-2 text-primary hover:text-primary-dark transition-colors"
        >
          {isLogin ? "Sign Up" : "Login"}
        </button>
      </p>
    </div>
  );
};

export default AuthForm;